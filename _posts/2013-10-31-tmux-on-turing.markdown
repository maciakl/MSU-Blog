---
layout: post
title: Setting up Tmux on the Turing Server
category: technical-resource

excerpt: The Turing server does not have Tmux, which is more or less criminal in this day and age. Fortunately, you can compile it from source and install it locally in your home directory. Here is how to do it.

---

You should be aware of the *Lee* and *Turing* servers. You may or may not have access to *Lee* but most people can get on *Turing*, and CS students are probably instructed to use it for course related to work. Unfortunately using a remote linux server to do any "work" without a terminal multiplexer is less than ideal. I believe *Turing* does have `screen` installed, but who wants to use that ancient relic in 2013. What you really want is `tmux` which is of course not there. Why would it be there? Why make life easy to the users when we can make them suffer.

How do we do this? Well, it is simple. First we need to decide where to install it. Since we don't have (and will never have) root, we need to install it in the home directory. Personally I don't like polluting the `~` itself, so I recommend installing into a subdirectory like `~/local` for example:

    mkdir ~/local
    export TARGET_DIR="$HOME/local"

The second line creates a temporary environment variable we will be using in the compilation process below. Please be aware that it will go away once you log out, unless you put it in your `.bashrc`.

First order of business is to get prerequisites. Fortunately, last time I checked *Turing* had almost everything needed to successfully compile `tmux` except a small library known as `libevent`. So before we do the main install, we need to grab and compile that:

{% highlight sh %}
wget https://github.com/downloads/libevent/libevent/libevent-2.0.15-stable.tar.gz
tar xf libevent-2.0.15-stable.tar.gz
cd libvent-2.0.15-stable
./configire --prefix="$TARGET_DIR" --disable-shared
make
make install
{% endhighlight %}

Make sure you use the `--prefix` argument when you run the configure script, otherwise the installation will fail. This argument specifies that we want to install it locally. The `--disable-shared` enforces static linking, which is what we want in this case.

Once compilation finishes you should be ready to install `tmux` proper:

{% highlight sh %}
 wget http://downloads.sourceforge.net/tmux/tmux-1.5.tar.gz
 tar xf tmux-1.5.tar.gz
 cd tmux-1.5

./configure CPPFLAGS="-I$TARGET_DIR/include -I$TARGET_DIR/include/ncurses" \
            CFLAGS="-I$TARGET_DIR/include -I$TARGET_DIR/include/ncurses" \
            LDFLAGS="-I$TARGET_DIR/include -L$TARGET_DIR/include -L$TARGET_DIR/include/ncurses -L$TARGET_DIR/lib" \
            --prefix="$TARGET_DIR"
make
make install
{% endhighlight %}

Yes, I know - that is a lot of compilation flags. That's because `tmux` is a complex app, and compiling and statically linking it in your home directory takes some gentle "convincing". The above however is verified to work, at least on *Turing*.

At this point you should add `~/local/bin` to your `$PATH` and you will be ready to roll. I don't think I have a primer on using `tmux` anywhere, but if you want to take a peek at my personal `tmux.conf` file, you can [find it here](https://github.com/maciakl/.dotfiles/blob/master/.tmux.conf).

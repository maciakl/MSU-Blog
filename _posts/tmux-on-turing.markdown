---
layout: post
title: 
category:

excerpt: 
---

    mkdir ~/local

    export TARGET_DIR="$HOME/local"

    wget https://github.com/downloads/libevent/libevent/libevent-2.0.15-stable.tar.gz
    tar xf libevent-2.0.15-stable.tar.gz
    cd libvent-2.0.15-stable
    ./configire --prefix="$TARGET_DIR" --disable-shared
    make
    make install

     wget http://downloads.sourceforge.net/tmux/tmux-1.5.tar.gz
     tar xf tmux-1.5.tar.gz
     cd tmux-1.5

    ./configure CPPFLAGS="-I$TARGET_DIR/include 
                            -I$TARGET_DIR/include/ncurses" 
                CFLAGS="-I$TARGET_DIR/include 
                            -I$TARGET_DIR/include/ncurses" 
                LDFLAGS="-I$TARGET_DIR/include 
                            -L$TARGET_DIR/include 
                            -L$TARGET_DIR/include/ncurses 
                            -L$TARGET_DIR/lib" 
                --prefix="$TARGET_DIR"
    make
    make install


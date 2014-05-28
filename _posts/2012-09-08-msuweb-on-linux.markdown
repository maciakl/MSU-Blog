---
layout: post
title: Mounting MSUWEB on Linux
category: technology

excerpt: I have noticed that OIT does not provide documentation on how to mount and access MSUWEB shares on Unix and Linux. They only provide instructions on how to mount it under Windows XP, Windows 7 and OSX. Here is my attempt to fill that void.
---

I have noticed that OIT does not provide documentation on how to mount and access MSUWEB shares on Unix and Linux. They only provide instructions on how to mount it under Windows XP, Windows 7 and OSX. Here is my attempt to fill that void.

But wait, isn't OSX a Unix underneath the hood? Of course it is. Unfortunately OIT documentation only shows you how to mount the share using Finder which is a proprietary Apple application and as such it is not really POSIX. I will be showing you how to mount MSUWEB in a POSIX-compatible way, so that you can cat, grep and diff your directory from the command line.

First thing you need is the `davfs2` package. If you are using Ubuntu you can easily install it by doing:

    apt-get install davfs2

If you are using something else, try finding it in your favorite package manager. If you are unable to get it as a binary, download and [compile it from source][1]. This package extends you `mount` command to work with WebDav shares.

Next, edit the `/etc/davfs2/davfs2.conf` file and add the following line at the end:

    use_locks   0

This will prevent your OS from locking files. I am not 100% certain this is required for MSUWEB, but better safe than sorry. Especially since I have [a history of file lock problems][2] on this platform.

Now, create some folder where you are going to mount your MSUWEB directory. For example:

    mkdir ~/msuweb

This will create an empty folder named `msuweb` in your home directory. Once we mount the WebDav drive, your MSUWEB files will be available from there.

Finally, add the following line to the end of your `/etc/fstab`:

    <url> <mnt> davfs rw,noauto,uid=<user>,gid=<user> 0 0

Where the values in brackets should be as follows:

* `<url>` is the WebDav url (same as listed in the OIT docs) which should be `https://msuwebdav.montclair.edu/pubweb_vol1/<NETID>` where `<NETID>` is your NetID.
* `<mnt>` is the mount point - in our case it will be `~/msuweb`.
* `<user>` is your *linux user-name* - as in the one you use to log into your computer. Don't use your NetID here. If you don't specify the correct username here, you will only get read access to the mounted directory.

Also, note that I specified the `noauto` option. This means your system will not attempt to automatically mount this drive when it starts up. This is actually on purpose, since you can't always expect to have internet access, and you probably don't want this drive mounted at all times anyway. Of course since the mounting is not automatic, we will have to do it manually:

    mount ~/msuweb

You will then be prompted for your NetID username and password. ~~If you want to skip this step, you can add your login info to `/etc/davfs2/secrets`~~ (this actually doesn't work for MSUWEB).


[1]: http://savannah.nongnu.org/projects/davfs2
[2]: {{site.baseurl}}/technical-resource/2012/09/03/msuweb-locking-files/

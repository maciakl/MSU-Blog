My MSU Blog
===========

This is the Jekyll source for my MSU blog [I teach 109][1]. Please visit the link to see it in action.

Setting up Environment
---

Install prerequisites:

    sudo aptitude install ruby gem node
    sudo gem install rake rdiscount
    sudo npm install grunt -g

Mount WebDav drive. On Linux you must first install `davfs`:

    sudo aptitude install davfs2

Then in your `/etc/fstab` put:

    https://msuwebdav.montclair.edu/pubweb_vol1/YOUR_NETID /remote/msuweb rw,noauto,uid=SYSTEM_USERNAME,gid=SYSTEM_USERNAME

Then:

    sudo mount /remote/msuweb

On windows it works out of the box:

    net use x: "https://msuwebdav.montclair.edu/pubweb_vol1/YOUR_NETID" /User:YOUR_NETID

Building and Development
---

Before you do anything run this in the project directory to grab grunt plugins you need:

    npm install

Now you should be ready to go. To do a quick one-time build and lint use:

    rake

To create a new post dated with today's date run:

    rake new

Then type in the title of the post when prompted. This will create an appropriately named template file in the `_posts` directory.

For development use two windows (or tmux split screen) and run these commands side by side

    jekyll --server
    grunt watch

This will make Jekyll auto-update the `_site` directory as you make changes, and grunt will lint all the newly created files to make sure they are valid HTML5.

Deploying
---

When ready to upload to the web do:

    rake deploy

This should work 99% of the time as long as the WebDav directory is properly mounted in /remote/msuweb or as the x: drive on Windows. To be extra sure you can always do it the system dependent way:

    rake windeploy
    rake lindeploy

This will execute the correct command.

[1]: http://msuweb.montclair.edu/~maciakl/blog/

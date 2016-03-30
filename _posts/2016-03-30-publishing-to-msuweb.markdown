---
layout: post
titke: Publishing to MSUWeb
category: resource
---

Every MSU student has the ability to publish a personal web site, or course related documents on the MSUWeb server. This post will show you how to access your MSUWeb space, and how to publish files to it.

### Preparing Your Files

Before you are ready to publish your website, create a new folder that will contain all of it's files. The folder should be named `lab7` or something similar, so that you can figure out what is inside just by looking at it.

Your folder should contain the following:

- The HTML file (I recommend naming it `index.html`)
- The CSS file (I recommend naming it `style.css`)
- Any image files you have used in your website

Place all the files in the folder, and double-click on the HTML file and make sure all your styles are applied and that all the images are showing up. If you see broken images, or missing styles, make sure you have all the files you created in the new folder.

### Publishing Your Website On Campus using MSU Lab Computer

Accessing MSUWeb on campus using one of the MSU provided lab computers is very easy. First log in to your lab computer using your NETID. If the computer is already showing the desktop, hit the Start menu and log out, then log back in.

Once you are logged in, the MSUWeb storage should be accessible as the `W:` drive under `My Computer`.

To publish your website, **simply copy and paste** the entire folder you created in the previous step to the `W:` drive.

Once you do this, make sure you access the published website via a web browser.

### Accessing a Published Website

Any files you place in your `W:` drive will be immediately published to the `msuweb.montclair.edu` web server and made available online. Each student is assigned their own folder on the server, named using their netid. Your personal folder will have the following url:

    http://msuweb.montclair.edu/~YOURNETID

Naturally, replace `~YOURNETID` with your actual NETID. For example, mine would be `~maciakl`. Please do not forget to put the tilde key in front of your NETID when doing this. The tilde key can be found to the left of the #1 key on your keyboard (you will have to press Shift to type it):

![](/img/tilde.png)

To see the files you have published, you have to append the name of the folder, and the name of the HTML file you have just published to the URL above. So the actual URL you will be accessing will be:

    http://msuweb.montclair.edu/~YOURNETID/FOLDERNAME/FILENAME.html

If you named your HTML file `index.html` you can skip the file name. The server is configured to send a file named `index.html` when no file name is given.

For example, imagine I have named my folder `lab7` and my file `webpage.html`. Then my URL would be like so:

    http://msuweb.montclair.edu/~maciakl/lab7/webpage.html

Note that you don't need to specify the CCS file or any image files in the URL. If they are properly linked in the HTML, they will be displayed without any issues.

### Publishing Your Website from Home Using Windows

If you are trying to do this lab from home, using a personal computer with Windows, you will not have the `W:` drive accessible. You will have to connect it. To do this, click on start menu and type in `cmd`. This should bring up **Command Prompt** icon. Click on it.

In the Command Prompt window, type in the following command:

    net use w: https://msuwebdav.montclair.edu/pubweb_vol1/YOURNETID

Naturally, you replace `YOURNETID` with your actual NETID. For example, for me this command would be:

    net use w: https://msuwebdav.montclair.edu/pubweb_vol1/maciakl

You will then be prompted for a user name and a password, which, as you might have guessed, are your NETID user name and password.

![](/img/netuse.png)

If you did this correctly, you should see *The command completed successfuly* in the command prompt window, and the `W:` drive should now be available under `My Computer`.

### Publishing Your Website from Home Using a Mac

If you are trying to do this lab from home, using a Mac computer you won't have the `W:` drive accessible. You will have to connect it.

- Open Finder
- From the menu choose `Go`
- Click on `Connect to Server`  
![](/img/macgo.png)
- In the **Directory Adresses** box type in: `https://msuwebdav.montclair.edu/pubweb_vol1/YOURNETID`
- Click on the `+` button
- Click `Connect`  
![](/img/maccon.png)
- You will be prompted for your NETID user name and password

If you have done this correctly, you should see the MSUWeb directory accessible from the sidebar in Finder.

### Publishing Your Website from Your Dorm Room

If you live on campus, and you are trying to do this lab from a personal computer connected to toe MSU network, please omit the `.montclair.edu` part of the address to the MSUWeb folder and use this, shortened version:

    https://msuwebdav/pubweb_vol1/YOURNETID

For example, I would use:

    https://msuwebwav/pubweb_vol1/maciakl

Refer to the Windows or Mac section above for detailed instructions.

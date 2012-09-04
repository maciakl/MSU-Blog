---
layout: post
title: Blogging on MSUWEB

excerpt: The MSUWEB service available to both students and faculty is very useful, but it has one major flaw - it is completely static. There is no server side scripting or database support, which makes it a less than ideal platform for personal blogging. Fortunately, not all blogging platforms require scripting or databases.
---

The MSUWEB service available to both students and faculty is very useful, but it has one major flaw - it is completely static. There is no server side scripting or database support, which makes it a less than ideal platform for personal blogging. Fortunately, not all blogging platforms require scripting or databases.

If you are not familiar with the MSUWEB service, the OIT has a [pretty extensive tutorial][1] on their website. Essentially they provide you with a WebDav accessible directory you can mount on your system. Too save you some time, here is the URL you need to use to mount it:

    https://msuwebdav.montclair.edu/pubweb_vol1/yournetid

Naturally you replace `yournetid` with your actual [NetID][2]. Refer to the OIT manuals to determine how to mount it. On a mac just open Finder and hit command+K and paste in the above address into the box and log in. On Windows I recommend using the `net use` command like this:

    net use x: "https://msuwebdav.montclair.edu/pubweb_vol1/yournetid"

I believe the main difference between the student accounts and faculty accounts is the amount of space you get, but I might be wrong. I don't have a student account handy to test it. You will quickly notice that whatever files you put in that directory will become web accessible. So for example if you put a file called `foo.html` in the root of that directory, you will be able to access it at:

    http://msuweb.montclair.edu/~yournetid/foo.html

As I mentioned above, this is about as much as you can do. The web pages are actually served via Apache server, so if you are so inclined you can do some URL rewriting trick using a `.htaccess` file. But that won't get you far without some sort of server side support. So as far as I'm concerned there are 3 ways you can approach building a website on MSUWEB:

1. **Old School Method** - build a traditional static site, and copy/paste design elements into every html file - which is silly and impractical.
2. **Javascript Trickery** - use hashbang style URL's and javascript to do the routing. This is the method I used on my [main teaching site][3] and it works (for the most part) but it has severe usability issues. Not to mention that hashbangs are now considered evil, and event Twitter is getting rid of them.
3. **Pre-Processing** - this is a newfangled thing that all the cool kids are doing. This is the method I use for this blog.

The pre-precessing idea is simple: since we have no server side processing capabilities, we will simply do all that work *before* deploying the website. When you run a dynamic site, PHP, Django, or Ruby takes all your script files and stitches them together into static HTML that gets sent to a browser in real time. For simple sites such as blogs, that get updated sporadically there is no reason why all that work can't be done on your computer rather than the server.

Here is what you will need:

- [Ruby][4] - the programming language.
- [Gems][5] - the framework for installing and updating ruby "gem" plugins.
- [Jekyll][6] - a very special gem which will do all the work for us.
- A little bit of web design and programming knowledge.

You don't need a degree in Computer Science to use Jekyll but some knowledge of programming is required. If you have never heard of Ruby, Gems and if you have never edited a HTML file by hand, or created a Markdown file then you might as well stop reading now. If you are comfortable with writing Markdown, and you don't mind occasionally tweaking a HTML or CSS file then keep going.

Chances are your machine is already running both ruby and gems. If that's the case, installing Jekyll is quite easy. Just open any terminal and type in:

    gem install jekyll

If you don't have it, I'm sure you can figure out how to get it on your machine. We already established you need to be at least a little bit tech savvy to continue with this tutorial so I won't waste your time with the easy stuff.

The way Jekyll works is rather simple. You create your site locally in some directory on your computer and you do it as if you were working with a dynamic framework. Jekyll has a templating engine that lets you separate your design from your content, and it will do a lot of work for you. All you are required to do is to follow it's conventions which I will outline below. Once you set up your site, you run Jekyll and it generates bunch of static files which you then dump wholesale to your webdav directory.

Setting up a Jekyll site from scratch is not trivial, but I have done most of the work for you. I have set up a [sample Jekyll blog here][7]. If you know how to use git, you can just fork or clone that repository. If not, just [download this file][8] and unzip it somewhere on your computer.

You will essentially get the following directory tree:

    \. 
    |   archive.html
    |   feed.xml
    |   index.html
    |   style.css
    |   _config.yml
    |
    +---_layouts
    |       default.html
    |       post.html
    |
    +---_posts
    |       2012-01-18-hello.markdown
    |       2012-01-19-testing.markdown
    |
    \---_site

I will first need you to open the `_config.yml` file and set your blog up to work with netdrive. Here is what you should have in your file:

    name: Your blog title
    description: Your blog description.

    baseurl: /~yournetid
    url: http://msuweb.montclair.edu/~yournetid

    auto: true
    permalink: pretty

The important bits are the `baseurl` and `url` properties. By default, Jekyll assumes you will be running a site in the root of your domain. The way MSUWEB infrastructure works is that we all get a folder under the main MSUWEB subdomain. So we simply need to ensure that when links are generated they point to `/~yournetid` instead of `/`. 

If this is your first Jekyll site I would recommend leaving all of the files alone for now. Simply open a terminal, navigate to that directory and run the following command:

    jekyll --server

This will create a temporary development server on your computer on the port 4000. To see your website, as it will look in a web browser simply go to:

    http://localhost:4000/~yournetid

The individual blog posts are kept in the `_posts` directory. I have two sample posts there, with generic *lorem ipsum* place-holder text. If you want to add a new post, you simply create a new markdown file in this directory. The only rule is to follow the naming convention you see on the other files. Your individual post files have to be dated like so:

    YYYY-MM-DD-post-title.markdown

If you omit the date at the beginning of the filename name the post will be ignored. The rest of the file name is up to you, but keep it simple as it will be a part of the url. For example the `2012-01-18-hello.markdown` file will become:

    http://msuweb.montclair.edu/~yournetid/2012/01/18/hello

Each post also requires a YAML Front Matter header. It looks like this:

    ---
    layout: post
    title: The post title

    excerpt: The text that will show up on the front page.
    ---

I believe this ought to be more or less self-explanatory. The excerpt will show up on the front page, and the title is what you want it to say in the heading. You type in the rest of your blog post below this block as normal. See the examples for details. 

If you want to spruce up the layout, you can edit the `style.css` and `_layouts/default.html` files which contain the main site elements. You can simply refresh your page in the browser at any time to see the changes take effect.

Once you are happy wit how your page looks, and you are ready to deploy it, kill the Jekyll server by hitting Ctrl+C. Now turn your attention to the `_site` subdirectory. This is where your blog was generated. Simply copy everything in that directory to your MSUWEB WebDav folder and watch the magic happen.

What if you want to add a new post? Fire up Jekyll again, create a new markdown file in the `_posts` directory, type your post up and then copy over the entire `_site` folder again overwriting everything as needed. Or you can use rsync, unison or a similar file sync tool to accomplish the deployment with minimum hassle.

Happy blogging! If you have any questions, please email me. I'm not setting up comments here for now.

[1]: http://www.montclair.edu/oit/documentation/active-directory-services/
[2]: https://netid.montclair.edu/main/netid/
[3]: http://msuweb.montclair.edu/~maciakl
[4]: http://www.ruby-lang.org/
[5]: http://rubygems.org/
[6]: http://jekyllrb.com/
[7]: https://github.com/maciakl/Sample-Jekyll-Site
[8]: https://github.com/maciakl/Sample-Jekyll-Site/zipball/master

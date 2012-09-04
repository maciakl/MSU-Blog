---
layout: post
title: Blog Comments

excerpt: Jekyll does not provide any comment functionality. This makes sense, because there would be no way to capture and pre-process user comments at compile time. Does this mean that Jekyll blogs cannot have comment threads? No, of course not. You just need to use an external service to handle this sort of thing.
---

Jekyll does not provide any comment functionality. This makes sense, because there would be no way to capture and pre-process user comments at compile time. Does this mean that Jekyll blogs cannot have comment threads? No, of course not. You just need to use an external service to handle this sort of thing.

Personally I would recommend using [Disqus][1] as I successfully deployed it on a number of Tumblr blogs. It used to be much more complicated to deploy, but these days it is as simple as signing up and pasting a block of Javascript code into your template.

If you happen to be using [my Jekyll template][2] then you would paste that block of code into the `_layouts/post.html` file, somewhere after the `content` tag but before the final `</div>`.

That said, I do not recommend running an unmoderated comment thread on a MSUWEB blog. There are several reasons for that. I personally chose not to include comments here among other things to avoid student mischief. While most students would never vandalise instructor blogs, the temptation to anonymously abuse available resources is always there. It is there even when anonymity is not part of the equation. In the past I have experimented with Blackboard provided discussion boards and unless their use was heavily structured and moderated, the use usually devolved into bickering and/or experimentation. One semester I left the boards open as a "student resource" only to watch one individual try to determine how deeply you can nest the discussion trheads by manually posting over a hundred empty replies to an empty post he himself created. That sort of thing can, and will happen if you don't watch the interactive online components you expose to the students.

The other reason of course is spam. Since you are hosting this blog on an university servers you don't really want it to be used for selling "male enhancement pills" or malware distribution. While Disqus comments are not theoretically hosted on MSUWEB, the URL where they appear is still associated with the university.

Those are the things you should watch for when deploying a comment system.

[1]: http://disqus.com/
[2]: {{site.baseurl}}/2012/09/01/blogging-on-msuweb/

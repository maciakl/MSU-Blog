---
layout: post
title: MSUWEB Locking Files 
category: technology

excerpt: While working on this blog I have noticed a strange issue with MSUWEB - sometimes it locks access to files and prevents them from being deleted or modified. Has anyone else noticed this issue or am I the only one?
---

While working on this blog I have noticed a strange issue with MSUWEB: sometimes it locks access to files and prevents them from being deleted or modified. Has anyone else noticed this issue or am I the only one?

The issue seems intermittent and does not always manifest itself. But when it does, it is incredibly annoying. The way I usually update this site is to run a quick script that copies over my Jekyll `_sites` directory into my WebDav mounted folder overwriting all the existing files as needed. Every once in a while a file will be locked - usually it happens to style.css or sitemap.xml but I've seen other files get locked.

When it happens said file cannot be deleted, overwritten or even edited. Both Internet Explorer and Finder claim they cannot touch the file because it is in use or locked by another process. I tried un-mounting and re-mounting the drive, flushing the cache by rebooting, disabling anti-virus suites and etc but nothing really works. I'm suspecting the file is locked by some process on the server side - perhaps even Apache itself.

Most of the time the lock gets released after a few hours, or a few days. Sometimes it doesn't, which you can probably imagine is very, very frustrating.

Here are a few things you can do to avoid getting your files locked:

1. Don't issue many consecutive writes. It seems that this is what triggers the locks. When you deploy or re-deploy your site this is unavoidable, but try not to overwrite the same files multiple times in a short period of time. After uploading all your files, wait 10-15 minutes before doing it again.

1. Do not set the WebDav directory as your `destination` in `_config.yaml` if you also have `auto` set to true.

1. Whenever you let Jekyll touch the WebDav directory, add `--no-auto` on the command line just in case.

1. If your file gets locked, drop everything and don't touch the WebDav dir for 2-3 hours, then try again.

I have submitted a helpdesk ticket, but I haven't heard back from them yet. I will update this page if I find a way to resolve the problem.

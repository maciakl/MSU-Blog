---
layout: post
title: Sophos Antivirus False Positives
category: technical-resource

excerpt: It has come to my attention that the latest definition update has made Sophos Antivirus has been causing false positive detections that may leave the client in a broken state. This is relevant because Montclair State Office of Information Technology uses Sophos as a primary virus protection agent on all university machines and distributes it's copies to all students and instructors.
---

It has come to my attention that the latest definition update has made Sophos Antivirus has been causing false positive detections that may leave the client in a broken state. This is relevant because Montclair State Office of Information Technology uses Sophos as a primary virus protection agent on all university machines and distributes it's copies to all students and instructors.

There is a [thread about it][1] on the official Sophos forums, and [another one at /r/sysadmin][2]. There is also an official [Sophos Advisory][4] that includes detailed instructions on resolving the issue. Unfortunately these instructions are targeted at systems administrators and server maintainers rather than end users. 

The specifics of the problem are as worrisome as they are interesting. Apparently the update caused Sophos to detect one of it's own internal files as a possible infection. That file happened to be the component responsible for downloading and updating virus definitions from the internet. Normally such an issue could be easily fixed by pushing out another definition update that overrides the previous one. 

Unfortunately since the affected file is the Sophos auto-update program, chances are it will be marked as an infection and quarantined or deleted before that happens. Therefore every affected client will become stuck in a broken state without the ability to update itself.

As far as I can tell, the best solution for end users is to: 

* Un-install and re-install the Sophos client. 

MSU students and faculty should be able to download it from the [OIT Software Repository][3].

This issue has been verified to affect Windows users. I'm not sure if it impacts Mac users. I'm also not certain if MSU community will be affected by this glitch. OIT may have not pushed the faulty patch yet. If they did, they might issue an official fix as well. If that happens I will post an update here.

**Update**

Got a confirmation that, yes, MSU community is affected. Only Windows users may see this issue. As of yet, there seems to be no official fix, therefore the re-install workaround is probably the simplest route to resolve it for end users.

[1]: http://community.sophos.com/t5/Sophos-Endpoint-Protection/Is-any-one-else-seing-this-alert-Shh-Updater-B-False-positives/td-p/29723
[2]: http://www.reddit.com/r/sysadmin/comments/105mdt/sophos_antivirus_update_causing_false_positives/
[3]: https://www.montclair.edu/oit/software/repository/
[4]: http://www.sophos.com/en-us/support/knowledgebase/118311.aspx

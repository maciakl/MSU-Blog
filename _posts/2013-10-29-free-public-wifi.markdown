---

layout: post
title: Free Public WiFi Phenomenon
category: student-resource

excerpt: Have you ever noticed a non-functioning, un-encrypted wireless network called "Free Public WiFi" popping up in your area? So did just about everyone in the world. Here is the story behind it.

---

Have you ever noticed a strange, non functioning, un-encrypted wireless network named *Free Public WiFi* occasionally popping up in your area? I have noticed it too, on more than one occasion. When I first saw it at work, I thought someone in the building was either messing around or setting up a *honeypot* of some sort. Then I noticed the same network popping up at home. Then at school, in a coffee shop and other places. I talked to my co-workers who travel a lot and they too seem to have noticed this mysterious network popping all over the country. 

These *Free Public WiFi* network never actually provide internet access and they tend to disappear as mysteriously as they appear. At one point I looked this network up on WiGLE.net (a service that tracks public networks) and noticed that it was very widespread:

![Free Public WiFi Map]({{site.baseurl}}/img/free_public_wifi.png)

Note that these were only the sightings of the network reported by active WiGLE users so the actual proliferation would have been much more significant. I believe this map represents the spread of the network circa 2008-2009. Ironically, the perpetually broken, non-functional *Free Public WiFi* had better "coverage" than most nationwide cellular networks operating at that time.

So what is the deal with this network? How and why did it spread across the nation like this? It turns out the answer is related to the way Windows handles wireless ad-hoc networks.

As you may recall from the class, ad-hoc networks can be set-up to facilitate wireless communication between computers without the need of an access point or a wireless router. If you find yourself in a room with bunch of people equipped with WiFi capable laptops but no internet access, you can easily bootstrap your own mini-network in just a few minutes.

By design, ad-hoc networks are supposed to be *spur of the minute* kind of things that are set up and torn down immediately after. When you save such a network connection to your *preferred networks* list Windows assumes that you mean to re-use this setup next time you have no internet access. In other words, if you have no WiFi connection whatsoever, and Windows finds an old ad-hoc network on your network list, it will resurrect it and set your laptop as the first, originating node. Once that happens everyone around you will see it as an available network and will be able to connect to it.

At some point in the past, someone set up a *Free Public WiFi* ad-hoc network. Someone else connected to it and saved it on their *preferred networks* list. From that point on, wherever that person was without WiFi access the *Free Public WiFi* would magically re-appear.

The allure of free WiFi seems to be irresistible, especially in WiFi depraved areas. Anyone who sees such a network immediately tries to connect to it. Once they connect, they realize it offers no internet access. So they shrug, disconnect and move on. But at that point the *Free Public WiFi* tag is on their preferred network list. And so the network spreads like a plague and there seems to be no way of stopping it.

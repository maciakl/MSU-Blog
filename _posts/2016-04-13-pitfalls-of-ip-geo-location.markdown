---
layout: post
titke: Pitfalls of IP Geo-Location
category: resource
---

In Lecture 6 we talked about TCP/IP protocol and the way computers that connect to the internet are addressed. We discussed how IP addresses are handed out, and how an address can be connected to an ISP or an organization, and from there traced back to an individual. I also briefly mentioned geo-location services that can trace an IP address to a geographical location. Here is an interesting news story about a family living on a farm in Kansas becoming a target for internet harassers, and a site of weekly police raids due to the way one of such mapping services resolves the location.

From the article:

>For the last decade, Taylor and her renters have been visited by all kinds of mysterious trouble. They’ve been accused of being identity thieves, spammers, scammers and fraudsters. They’ve gotten visited by FBI agents, federal marshals, IRS collectors, ambulances searching for suicidal veterans, and police officers searching for runaway children. They’ve found people scrounging around in their barn. The renters have been doxxed, their names and addresses posted on the internet by vigilantes. Once, someone left a broken toilet in the driveway as a strange, indefinite threat.
>
>The trouble for the Taylor farm started in 2002, when a Massachusetts-based digital mapping company called MaxMind decided it wanted to provide “IP intelligence” to companies who wanted to know the geographic location of a computer to, for example, show the person using it relevant ads or to send the person a warning letter if they were pirating music or movies.
>
>There are lots of different ways a company like MaxMind can try to figure out where an IP address is located. It can “war-drive,” sending cars around the U.S. looking for open wifi networks, getting those networks’ IP addresses, and recording their physical locations. It can gather information via apps on smartphones that note the GPS coordinates of the phone when it takes on a new IP address. It can look at which company owns an IP address, and then make an assumption that the IP address is linked to that company’s office.
>
>But IP mapping isn’t an exact science. At its most precise, an IP address can be mapped to a house. (You can try to map your own IP address here.) At its least precise, it can be mapped only to a country. In order to deal with that imprecision, MaxMind decided to set default locations at the city, state and country level for when it knows only roughly where the IP address lives. If it knows only that an IP address is somewhere in the U.S., and can’t figure out anything more about where it is, it will point to the center of the country.
>
>The precise center of the United States is in northern Kansas, near the Nebraska border. Technically, the latitudinal and longitudinal coordinates of the center spot are 39°50′N 98°35′W. In digital maps, that number is an ugly one: 39.8333333,-98.585522. So back in 2002, when MaxMind was first choosing the default point on its digital map for the center of the U.S., it decided to clean up the measurements and go with a simpler, nearby latitude and longitude: 38°N 97°W or 38.0000,-97.0000.
>
>As a result, for the last 14 years, every time MaxMind’s database has been queried about the location of an IP address in the United States it can’t identify, it has spit out the default location of a spot two hours away from the geographic center of the country. This happens a lot: 5,000 companies rely on MaxMind’s IP mapping information, and in all, there are now over 600 million IP addresses associated with that default coordinate. If any of those IP addresses are used by a scammer, or a computer thief, or a suicidal person contacting a help line, MaxMind’s database places them at the same spot: 38.0000,-97.0000.
>
>IP addresses, which get used as digital evidence in criminal trials and to secure search warrants, are not always reliable. Like Social Security numbers, they were a numerical system built for one purpose that are now used for something completely different. Social Security numbers were designed to keep track of a person’s earnings over their lifetime, but are now the security token used to lock down their entire identity. IP addresses were meant to allow computers to talk to each other, but have been repurposed to reveal details about the person behind that computer. The words “security” and “address” in their titles promise more than they can deliver.

You can read the [full article here](http://fusion.net/story/287592/internet-mapping-glitch-kansas-farm/).

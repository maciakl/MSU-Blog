---
layout: post
title: MB vs MiB - Seagate Class Action Lawsuit

category: resource

excerpt: The scaling of memory measurement units can be a little bit ambiguous. An unscrupulous hardware manufacturers used a technicality to swindle thousands of customers until they got caught. All because of a disagreement about what the exact meaning of the prefixes such as "Mega" and "Giga" when talking about computer memory.
---

If you ever took a science class you should know about the [International System of Units][1]. Quite a while ago, scientists decided to standardize and chose metric system as the universal measurement system all scientists should use when they exchange experimental data, or work together on projects. This was done to prevent mistakes like, for example [crashing a lander on Mars][2] due to measurement error. 

This standardization also specified how to scale said units using universal prefixes. The prefix system was rooted in the metric system, and used multiples of 10 to create derived units:

    Kilo (K) -> 10^3    1 Kg = 100 grams
    Mega (M) -> 10^6    1 Mg = 100 Kg
    Giga (G) -> 10^9    1 Gg = 100 Mg

Byte - a universally recognized fundamental computer memory unit is not part of the SI standard. Despite that fact, computer scientists adopted the SI prefixes (kilo, mega, giga, etc..) because they were familiar and easily recognizable. So we have started measuring our memory in Kilobytes and Megabytes defining them like so:

    1 Kb    =   2^10 bytes  =   1024 bytes
    1 Mb    =   2^20 bytes  =   1024 Kb
    1 Gb    =   2^30 bytes  =   1024 Gb

Note that this usage does not follow the SI specifications, which are very strict about using base 10. But because the stored values and memory addresses are binary, it made sense to use a base 2 scale for memory unit prefixes. While it did introduce some ambiguity, it was easy to determine if Mega means 10^6 or 2^20 based on context. 

Of course, every once in a while someone would throw their hands up and argue that when you say Mega, you can only means 10^3 and that everyone else is wrong. There were many epic internet flame wars over it, and it was a long time favored topic of professional nitpicker and forum trolls.

To combat this ambiguity, International Electrotechnical Commission introduced a new unit scale back in 2000. They proposed to get away from using SI prefixes (kilo, mega, giga) and instead use similar, [custom prefixes][3] like Kibi, Mebi, Gibi and etc:

    1 KiB   =   2^10 bytes  =   1024 bytes
    1 MiB   =   2^20 bytes  =   1024 KiB
    1 GiB   =   2^30 bytes  =   1024 MiB

Most standards organizations accepted this proposal, and some hardware manufacturers immediately switched to this nomenclature in order to avoid ambiguity. Other companies decided to stick with the old nomenclature to prevent confusing their customers who had hard enough time telling a Gigabyte from a Megabyte without Kibibytes getting in their way. For the most part, nothing changed.

Hard drive manufacturing company Seagate got a brilliant idea to save money. They were already using the old nomenclature on all their products, so they decided that rather than change their promotional materials, they will instead bring their hardware in line with the "official" SI specifications. Namely, when selling you a hard drive labeled as 1 Tb they will actually ship you a device capable of storing 10^12 rather than 2^40 bytes as you might expect.

What is the problem with that? Well, if you do the mat, you will see that 2^40 is a larger number than 10^12. The difference is close to 7% of total storage space. Are we being pedantic here? Is 7% really such a big deal? Let's see how much would the difference be for a 1 Tb drive:

    2^30    =   1,099,511,627,776  bytes
    10^12   =   1,000,000,000,000  bytes
    ------------------------------------
                   99,511,627,776  bytes    =>  92.6 GiB

That's actually a lot of space. The difference between the two drives is equivalent to the contents of 10 DVD's which is nothing to sneeze at. Because of a silly naming convention discrepancy, Seagate got away selling their customers drives that could on average store 10 less DVD quality movies than what you would expect by reading the sign on the box.

What is worse, most modern operating systems such as Windows and OSX would expect a Terrabyte to be 2^40 bytes. Therefore customers who bought the Seagate 1Tb drive would see their system report it only as about 930Gb. Despite numerous complaints, Seagate refused to give people refunds for the missing memory citing "caveat emptor" and claiming their interpretation of the prefix "Terra" was clearly outlined on the box (somewhere in the fine print section).

Eventually enough people got angry about this to organize a class action lawsuit against the manufacturer. After some legal positioning [Seagate settled][4] and agreed to give all the affected customers who bought their "incorrectly labeled" drives between 2001 and 2007 a 5% cash back for the missing bytes.

[1]: http://en.wikipedia.org/wiki/International_System_of_Units
[2]: http://articles.cnn.com/1999-09-30/tech/9909_30_mars.metric_1_mars-orbiter-climate-orbiter-spacecraft-team?_s=PM:TECH
[3]: http://en.wikipedia.org/wiki/Mebibyte
[4]: http://www.bit-tech.net/news/bits/2007/10/26/seagate_lawsuit_concludes_settlement_announced/1

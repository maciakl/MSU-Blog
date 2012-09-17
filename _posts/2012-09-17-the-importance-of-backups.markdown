---
layout: post
title: The Importance of Backups
category: student-resource

excerpt: The hard drive is the hardware component responsible for permanently storing all your data. Whenever you save documents, grab vacation pictures from your phone, download music from the internet, or mark websites as favorites, that information is stored on the hard drive. In most cases, your computer has only a single hard drive, and if anything happens to it, all your data can be lost. It is quite ironic that the hard drive is actually the most fragile and damage prone part of your computer.
---

The hard drive is the hardware component responsible for permanently storing all your data. Whenever you save documents, grab vacation pictures from your phone, download music from the internet, or mark websites as favorites, that information is stored on the hard drive. In most cases, your computer has only a single hard drive, and if anything happens to it, all your data can be lost. It is quite ironic that the hard drive is actually the most fragile and damage prone part of your computer.

The three crucial components of the hard drive are the platters made of aluminum alloy, the moving actuator arm, and the read/write head made out of thin copper wire:

![Hard Drive Parts]({{site.baseurl}}/img/hd.jpg)

All these parts are extremely vulnerable to **physical shocks**. The data is encoded on magnetically sensitive surface of the platter, and this surface need to be smooth and polished to mirror like shine in order for the data to be reliably read. Any scratches or defects on the surface can cause catastrophic and irrecoverable data corruption. Fortunately, the platter and the actuator arm are usually hermetically sealed in a plastic enclosure to prevent any dust or debris gathering on the platters.

If that hermetic seal would ever be lost, due to for example a strong impact, dust buildup may cause what is known as a *head crash*. The read-write head usually glides fractions of a millimeter above the surface of the platter. The thin coper-wire that conducts electromagnetic forces produced by the strong magnet hidden beneath the actuator arm needs to be as close to the mirror-sheen plane of the platter as possible, without ever actually touching it. If there are enough dust particles built up on the surface they will create an obstacle that the wire will inevitably crash into. This will either cause the wire to be bent or ripped off making it unusable. Sometimes it will be bent into the platter surface, causing it to gauge a circular groove destroying all the data in it's path.

Of course a head crash can be caused even without loss of the seal on the enclosure. A strong enough shock can cause the actuator arm to move a fraction of a millimeter up or down, which is usually enough to make the head impact the surface. When the computer is off, the actuator arm usually rests in a "parked" position away from the platter so even if it's bearings are damaged, there is no data corruption. When the computer is running however, and the drive is in use, dropping your computer may cause irreparable damage to both the platter and the actuator arm.

Even if the platter is not damaged, the actuator arm and the read-write head cannot be easily replaced by the user, because opening the drive will expose the platters to the dust in the air. To have any hope of recovering any data from a drive after a head crash, you need to disassemble it in a dust-free vacuum environment.

The data on your drive is also extremely vulnerable to **electromagnetic interference**. Strong magnets deployed near a hard drive can change the alignment of particles on the surface, effectively corrupting data. Enclosure usually have adequate shielding to block electromagnetic interference from most household appliances but the danger of corruption is always there.

Even if you manage to keep your hard drive away from strong magnets, and protect it from shocks and physical damage, there is still a regular daily **wear and tear** to worry about. Your hard drive is the only component in your computer with moving parts. The actuator arm is in near-constant motion when the computer is on, and there material fatigue is to be expected. Most hard drives have an average lifetime expectancy of 3-5 years (depending on usage).

The new, ultra-fast *solid state* hard drives are much more robust - they don't have moving parts, and they are not vulnerable to magnetic interference but they also have limited lifetimes. The memory cells in the SSD can only be "flashed" a limited number of times before they cease to function. It usually takes hundreds of thousands of writes to "break" a cell, and not all cells are in use at the same time so the average lifespan of an SSD is comparable to that of a regular "spinning" drive.

The point is that it is not a question of **if** your hard drive will fail, but a question of **when**. And the unfortunate fact is that it may happen any time, without any warning. Mac users are as vulnerable to this as PC users.

**What can you do?**

You can't prevent your hard drives from failing, but you can take steps to protect your data. The only sane and reasonable and sane thing to do is to back-up your data. And by backup I mean duplication. You should have at least two (but three or four is better) redundant copies of all the information you don't want to lose. Not only that, your backups should be automated (so that you don't forget) and performed as frequently as possible.

Mac users should at the very least buy an external hard drive, and set up the built-in backup software known as Time Machine. Once set up, the Time Machine backups are fully automated and do not require user interaction. Laptop users should opt to buy a Time Machine compatible <acronym title="Network Attahed Storage">NAS</acronym> drive so they won't need to plug anything to their computer in order to perform backup.

The problem with the Time Machine is that it only backs up your computer to a single place, and that place usually lives in the same room as your computer. So in case of a fire, burglary or another disaster both your computer and your backup drive can be lost at the same time.

To prevent this from happening, I recommend signing up for a *cloud based* backup service like [Mozy][1], [Carbonite][2] or [Crash Plan][3]. For a small monthly fee, these type of services will automatically back-up your files every night, and store them on their servers. In an event of catastrophic loss of all your hardware, the backups will still be available online allowing you to fully recover everything.

From personal experience, I know that Mozy allows you to use a hybrid strategy - it will back up your data to the *cloud*, but also to an external drive connected to your computer. This way your data is replicated in three places:

* Your computer
* An external hard drive you own
* Mozy data center somewhere on the internet

It is highly unlikely that all 3 of those locations will suffer an irrecoverable data failure at the same time.

If you think that these solutions are an overkill I recommend installing a free *cloud sync* software such as [Dropbox][4] or [Google Drive][5]. These programs let you designate a single folder on your computer that will be instantly and seamlessly synced with an online data center and/or any other computer you own and install the software on. Naturally there are limits of how much information you can put in these folders (free Drobox accounts are capped at 2GB for example) but it is a really good way to sync up and replicate important documents such as homeworks, term papers and etc..

Regardless of what strategy and software approach you choose, please remember that not doing backups is both reckless and irresponsible.

[1]: http://mozy.com
[2]: http://www.carbonite.com
[3]: http://www.crashplan.com
[4]: https://www.dropbox.com/
[5]: https://www.google.com/intl/en_US/drive/start/

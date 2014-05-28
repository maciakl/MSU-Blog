---
layout: post
title: Teaching programming with LOGO
category: teaching

excerpt: I usually devote a lab session to an exercise programming in LOGO. Why? Well, a lot of the lecture materials revolve around software, so it is only logical to show students a very rudimentary example of how it is written. It helps to demystify software development and reveal it as something mundane and ordinary rather than an arcane art practiced only by the select few.
---

I usually devote a lab session to an exercise programming in LOGO. Why? Well, a lot of the lecture materials revolve around software, so it is only logical to show students a very rudimentary example of how it is written. It helps to demystify software development and reveal it as something mundane and ordinary rather than an arcane art practiced only by the select few. It also helps to foster the abstract thinking skills the students may need later on.

I use the Java based interpreter known as [Tortue Logo][1] which is not perfect, but adequate. While there are other, better LOGO engines out there, this one does not require installation or administrative privileges. All the computers in the RI-108 lab have Java, and Tortue comes packaged in an executable jar file. Student need only to download that file, put it on the desktop, double click on it and are ready to go:

![Tortue Interprete]({{site.baseurl}}/img/tortue.jpg)

You can actually see the abridged contents of [my lab writeup here][2]. It is a very, very basic lesson in simple procedural programming. LOGO is good at drawing lines, so that's really what I do through most of the tutorial - I show them how to draw lines and simple geometric shapes.

For example, here is my favorite example of how to draw a square:

    FORWARD 100
    LEFT 90
    FORWARD 100
    LEFT 90
    FORWARD 100
    LEFT 90
    FORWARD 100

From here it is easy to introduce the concept of logical loops, simply by showing the students the redundancy of the code. The same work can be accomplished by:

    REPEAT 4
        FORWARD 100
        LEFT 90
    END REPEAT

It is interesting that while most students understand the logic behind the loop in this example, many do not grasp the actual purpose of the `REPEAT` statement or be able to adapt it. For example, I ask students to use LOGO to draw a "house" (which at the very least needs to be a triangle on top of a square) and a sun above it. I don't specify how to draw the sun, but ask that it is vaguely round or star-shaped but not square. There are many ways to draw it, here is one example:

![Tortue Interprete]({{site.baseurl}}/img/tortue2.jpg)

I have actually never seen students do this particular trick unless I lead them to it, because most don't even consider resetting the pen back to origin within the loop. The point is that the best way to achieve a round or star shape is to use loops. For example, once you know how to draw a triangle, you can make a very neat star shaped sun by simply looping that shape around a few times. However a lot of students struggle with this, and try to draw their suns line by line. Other students have a lot of fun with this excercise, and add stars, doors and windows to their house and etc.

Of course, tortue is not without it's flaws. One of the biggest problems with this particular interpreter is the lack of the "turtle". Many logo interpreters have an optional visual pointer so that the students can see which direction the line will be drawn. This one does not.

The interpreter is a bit temperamental at times and sometimes the RUN button becomes grayed out. I'm not entirely sure why that happens, but pushing the refresh button usually resolves the issue. This is something to watch for, and it is best mentioned before students start working with the software.

Since Tortue does not clear the canvas or reset the pointer position between runs, it is usually a good idea to tell students to start every program with the `NEW` command to begin with a clean slate. Granted, this is not actually a Tortue flaw, but rather LOGO design choice. Still, `NEW` will make everyone's life much easier.

By default, Tortue puts you in the middle of the canvas. The exact position of that point is dependent on the size of the window. Resizing it, will change the location of `HOME`. When students attempt to draw shapes and use `SETX` and `SETY` to align things, they often become confused when things shift around after they maximize their window, or resize it slightly. I find it a good practice to recommend that all programs start with the following boilerplate:

    NEW
    SETX 200
    SETY 200
    
This orients the pointer at a known point, and prevents the drawings from shifting around when the window is resized.

Finally, Tortue does not auto-save anything. It is possible for a student to close the window and lose all their work. I like to mention this at the beginning of the lab, and often suggest copy-pasting the program into notepad as a "backup".

The deliverable in this exercise is a text file containing the program. It can be saved directly from Tortue via the `File->Save As..` option, or via copy-paste to notepad. This point needs to be re-iterated several times at the end of the lab, otherwise more absent-minded students may attempt to submit the Tortue jar file instead of their actual work. Explaining that the jar file is actually a program, and not a document does not necessarily sink in right away. I find that many student won't internalize the distinction between an executable file, and data file until a homework assignment or midterm review session forces them to.


[1]: http://tortue.sourceforge.net/
[2]: http://msuweb.montclair.edu/~maciakl/#!/programming

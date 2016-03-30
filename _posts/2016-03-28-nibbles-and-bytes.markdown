---
layout: post
titke: Nibbles and Bytes
category: resource
---

In one of the homework assignments I introduced the concept of a nibble (or nybble). In this post, I will attempt to provide a short explanation for this concept.

The term nibble is used to represent the amount of computer memory needed to store half a Byte (or four Bits). It has been coined as a play on words based on the fact that Byte (a standard unit of measurement for computer memory) is a homophone of the English word "bite". Thus, it stands to reason that half of a "bite" would be a "nibble". The alternate spelling, nybble, further elaborates on the idea by replacing the i with an e as in the word Byte.

The coning of the term is sometimes attributed to David D. Benson of Washington State University around 1958. One of the earliest recorded usages was in 1977 documentation produced by consumer-banking technology group at Citibank which was working on creating communication protocols for early electronic cash machines.

Nibbles are notable, because there is exactly 16 of them, and thus they are perfect for storing a single Hexadecimal digit:

![](/img/nibble.png)

Each Byte, therefore can be represented as two nybbles, or, two Hexadecimal digits concatenated to each other. Programmers have used this property for decades, to make reading machine code less of a chore. Instead of reading raw binary code, one can convert it to hexadecimal. Each byte then becomes a two digit number.

You can do this yourself by using a Hex Reader program, or an online equivalent such as [hexed.it](https://hexed.it/).

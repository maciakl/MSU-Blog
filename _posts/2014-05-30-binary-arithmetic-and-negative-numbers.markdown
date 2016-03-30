---
layout: post
titke: Binary Arithmetic and Negative Numbers
category: student
---

In class we learned how to convert numbers from decimal to binary and the other way around. Let’s talk about some more advanced concepts.

You can perform simple arithmetic on binary numbers just as you do on decimal numbers and it works. For example, here is a simple addition using two 8 bit numbers. Decimal values are shown in parentheses:

      0000 1001   (   9)
    + 0000 0001   (+  1)
    ------------
    = 0000 1010   (= 10)

Subtraction also works, as long as you subtract a smaller number from a lager one:

      0000 1001   (   9)
    - 0000 0001   (-  1)
    ------------
    = 0000 1000   (=  8)

The other way does not work, because result is a negative number. How do we store a negative number in memory? Good question. We can’t encode a minus sign because we only have zeros and ones to work with. So we need to be clever.

For example, lets sacrifice one bit of data and use that as our sign. We will assume that if we see 1 as the first digit of the number, it is going to be negative, and otherwise positive.

Unfortunately this only works as long as you don’t try to do any arithmetic. The math just does not work out. Or rather it can work out, but only if you remember that the first digit is special.

In real systems, negative numbers are not stored directly, but rather as a Two’s Complement of the actual number.

To calculate Two’s Complement of a number, you simply invert it’s digits and add one to it like this:

      0000 1001   (   9)
      1111 0110             invert
    + 0000 0001   (+  1)
    ------------
    = 1111 0111   (= -9)    ?

So the binary representation of -9 is `1111 0111` (if we’re dealing with 8 bit numbers). Let’s check if math works by adding one to it:

      1111 0111   (  -9)
    + 0000 0001   (+  1)
    ------------
    = 1111 1000   (= -8)    ?

If we did this right, taking two’s complement of the number above should yield 8. Let’s check our work:

      1111 1000   (  -8)
      0000 0111             invert
    + 0000 0001   (+  1)
    ------------
    = 0000 1000   (   8)

This will work with most numbers, but there are still edge cases. For example, think what would happen if we wanted to write positive integer 128 using this scheme?

If we’re still working with 8 digit numbers, then the computer would see a one in the first column since 128 is `1000 0000` in binary. It would assume this is a negative number, even though we never intended it to be. This is called an integer overflow. The number becomes too big to big, and overflows becoming either negative or positive. This is a common bug in a lot of programs. If the programmer did not allocate enough memory for the number then a simple addition or subtraction may cause it to overflow and produce erroneous results.

Clearly to store 128 we need more bits, but how many? If we take an arbitrary number each time, how do we know which one is “first”?

Most programming languages allocate 32 bits of memory for standard integers and 64 bits for so called long integers. There are usually other data types for even larger numbers.

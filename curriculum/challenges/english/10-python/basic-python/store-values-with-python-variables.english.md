---
id: 5c55e842103ae886fa3ba966
title: Store Values with Python Variables
challengeType: 9
---

## Description
<section id='description'>
A value is one of the basic things a program works with, like a letter or a number. Values can be things like <code>1</code>, <code>42</code>, and <code>"Hello, World!"</code>.
These values belong to different types: 42 is an integer, and "Hello, World!" is a string, so called because it contains a "string" of letters. You (and the interpreter) can identify strings because they are enclosed in quotation marks.
Computers can perform mathematical operations on a number, but not on a string.
Strings belong to the type <code>str</code> and integers belong to the type <code>int</code>. Less obviously, numbers with a decimal point belong to a type called <code>float</code>, because these numbers are represented in a format called floating point.
<dfn>Variables</dfn> allow computers to store and manipulate data (values) in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any data type may be stored in a variable.
<dfn>Variables</dfn> are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer <dfn>variables</dfn> differ from mathematical variables in that they can store different values at different times.
An <dfn>assignment statement</dfn> creates new variables and gives them values:
<blockquote>message = 'And now for something completely different'<br>
n = 17<br>
pi = 3.1415926535897931</blockquote>
This example makes three assignments. The first assigns a string to a new variable named <code>message</code>; the second assigns the integer 17 to <code>n</code>; the third assigns the (approximate) value of π to <code>pi</code>.
Programmers generally choose names for their variables that are meaningful and document what the variable is used for.
Variable names can be arbitrarily long. They can contain both letters and numbers, but they cannot start with a number. It is legal to use uppercase letters, but it is a good idea to begin variable names with a lowercase letter (you'll see why later).
The underscore character ( _ ) can appear in a name. It is often used in names with multiple words, such as <code>my_name</code> or <code>airspeed_of_unladen_swallow</code>. Variable names can start with an underscore character, but we generally avoid doing this unless we are writing library code for others to use.
</section>

## Instructions
<section id='instructions'>
Assign the value <code>7</code> to variable <code>a</code>.
Assign the value <code>'pizza'</code> to variable <code>food</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should have a value of 7
    testString: code => code.includes("a = 7")
    type: input
  - text: <code>food</code> should have a value of 'pizza'
    testString: code => code.includes('food = "pizza"') || code => code.includes("food = 'pizza'")
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python


```

</div>

</section>

## Solution
<section id='solution'>


```python
a = 7;
food = "pizza";
```

</section>

---
id: 5c55e842103ae886fa3ba965
title: Store Multiple Values in one Variable using Python Lists
challengeType: 9
---

## Description
<section id='description'>
With Python <dfn>list</code> variables, we can store several pieces of data in one place. Lists in Python work similar to arrays in JavaScript.
You start an list declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
<code>sandwich = ["peanut butter", "jelly", "bread"]</code>.

Like a string, a <dfn>list</dfn> is a sequence of values. In a string, the values are characters; in a list, they can be any type. The values in list are called elements or sometimes items.

There are several ways to create a new list; the simplest is to enclose the elements in square brackets ("[" and "]"):
<blockquote>10, 20, 30, 40]<br>
['crunchy frog', 'ram bladder', 'lark vomit']</blockquote>
The first example is a list of four integers. The second is a list of three strings. The elements of a list don't have to be the same type. The following list contains a string, a float, and an integer:
<blockquote>['spam', 2.0, 5]</blockquote>

</section>

## Instructions
<section id='instructions'>
Modify the new list <code>my_list</code> so that it contains both a <code>string</code> and an <code>integer</code> (in that order).
<strong>Hint</strong><br>Refer to the example code in the text editor if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_list</code> should be an <code>list</code>.
    testString: isinstance(my_list, list)
    type: code
  - text: The first item in <code>my_list</code> should be a <code>string</code>.
    testString: isinstance(my_list[0], str)
    type: code
  - text: The second item in <code>my_list</code> should be an <code>integer</code>.
    testString: isinstance(my_list[1], int)
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
// Example
our_list = ["John", 23]

// Only change code below this line.
my_list = []

```

</div>

</section>

## Solution
<section id='solution'>


```python
my_list = ["The Answer", 42]
```

</section>

---
id: 5c55e842103ae886fa3ba95f
title: Manipulate Lists With append()
challengeType: 9
---

## Description
<section id='description'>
An easy way to append data to the end of an list is via the <code>append()</code> function.
<code>.append()</code> takes one or more <dfn>parameters</dfn> and "appends" them onto the end of the list.
<blockquote>arr = [1,2,3]<br>arr.append(4)<br># arr is now [1,2,3,4]</blockquote>
</section>

## Instructions
<section id='instructions'>
Append <code>["dog", 3]</code> onto the end of the <code>mylist</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mylist</code> should now equal <code>[["John", 23], ["cat", 2], ["dog", 3]]</code>.
    testString: mylist == [["John", 23], ["cat", 2], ["dog", 3]]

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
ourlist = ["Stimpson", "J", "cat"]
ourlist.append(["happy", "joy"])
# ourlist now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

# Setup
mylist = [["John", 23], ["cat", 2]]

# Only change code below this line.


```

</div>

</section>

## Solution
<section id='solution'>


```python
mylist = [["John", 23], ["cat", 2]]
mylist.append(["dog",3])
```

</section>

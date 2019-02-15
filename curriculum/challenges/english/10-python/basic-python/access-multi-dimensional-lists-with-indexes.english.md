---
id: 5c54cde7103ae886fa3ba91d
title: Access Multi-Dimensional Lists With Indexes
challengeType: 9
guideUrl: 'https://www.freecodecamp.org/guide/certificates/access-list-data-with-indexes'
---

## Description
<section id='description'>
One way to think of a <dfn>multi-dimensional</dfn> list, is as an <em>list of lists</em>. When you use brackets to access your list, the first set of brackets refers to the entries in the outer-most (the first level) list, and each additional pair of brackets refers to the next level of entries inside.
<strong>Example</strong>
<blockquote>list = [<br>&nbsp;&nbsp;[1,2,3],<br>&nbsp;&nbsp;[4,5,6],<br>&nbsp;&nbsp;[7,8,9],<br>&nbsp;&nbsp;[[10,11,12], 13, 14]<br>]<br>list[3] # equals [[10,11,12], 13, 14]<br>list[3][0] # equals [10,11,12]<br>list[3][0][1] # equals 11</blockquote>
<strong>Note</strong><br>There shouldn't be any spaces between the list name and the square brackets, like <code>list [0][0]</code> and even this <code>list [0] [0]</code> is not allowed.
</section>

## Instructions
<section id='instructions'>
Using bracket notation select an element from <code>myList</code> such that <code>myData</code> is equal to <code>8</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myData</code> should be equal to <code>8</code>.
    testString: myData == 8
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Setup
myList = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]

# Only change code below this line.
myData = myList[0][0]

```

</div>

</section>

## Solution
<section id='solution'>


```python
myList = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]]
myData = myList[2][1]
```

</section>

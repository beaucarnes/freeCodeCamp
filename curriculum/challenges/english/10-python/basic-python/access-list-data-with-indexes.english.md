---
id: 5c54c9af103ae886fa3ba91c
title: Access List Data with Indexes
challengeType: 9
guideUrl: 'https://www.freecodecamp.org/guide/certificates/access-list-data-with-indexes'
---

## Description
<section id='description'>
We can access the data inside lists using <code>indexes</code>.
List indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the list. Like strings, lists use <dfn>zero-based</dfn> indexing, so the first element in an list is element <code>0</code>.
<br />
<strong>Example</strong>
<blockquote>list = [50,60,70]<br>list[0] # equals 50<br>data = list[1] # equals 60</blockquote>
<strong>Note</strong><br>There shouldn't be any spaces between the list name and the square brackets, like <code>list [0]</code>.
</section>

## Instructions
<section id='instructions'>
Create a variable called <code>myData</code> and set it to equal the first value of <code>myList</code> using bracket notation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>myData</code> should equal the first value of <code>myList</code>.
    testString: myData == myList[0]
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
ourList = [50,60,70]
ourData = ourList[0] # equals 50

# Setup
myList = [50,60,70]

# Only change code below this line.

```

</div>


</section>

## Solution
<section id='solution'>


```python
myList = [50,60,70]
myData = myList[0]
```

</section>

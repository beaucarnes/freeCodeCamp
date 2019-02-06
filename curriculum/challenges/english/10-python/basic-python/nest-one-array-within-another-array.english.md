---
id: 5c55e842103ae886fa3ba957
title: Nest one Array within Another Array
challengeType: 9
---

## Description
<section id='description'>
You can also nest arrays within other arrays, like this: <code>[["Bulls", 23], ["White Sox", 45]]</code>. This is also called a <dfn>Multi-dimensional Array<dfn>.
</section>

## Instructions
<section id='instructions'>
Create a nested array called <code>myArray</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should be an array
    testString: isinstance(myArray, list)
    type: code
  - text: <code>myArray</code> first item should be an array
    testString: isinstance(myArray[0], list)
    type: code
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
ourArray = [["the universe", 42], ["everything", 101010]]

# Only change code below this line.
myArray = []

```

</div>

</section>

## Solution
<section id='solution'>

```python
myArray = [[1,2,3]];
```

</section>

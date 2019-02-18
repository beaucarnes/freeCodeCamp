---
id: 5c55e842103ae886fa3ba963
title: Shopping List
challengeType: 9
---

## Description
<section id='description'>
Create a shopping list in the variable <code>myList</code>. The list should be a multi-dimensional list containing several sub-arrays.
The first element in each sub-list should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
<code>["Chocolate Bar", 15]</code>
There should be at least 5 sub-lists in the list.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> should be an list
    testString: isinstance(myList, list)
    type: code
  - text: The first elements in each of your sub-lists must all be strings
    testString: for a in myList: isinstance(a[0], str)
    type: code
  - text: The second elements in each of your sub-arrays must all be numbers
    testString: for a in myList: isinstance(a[1], int)
    type: code
  - text: You must have at least 5 items in your list
    testString: len(myList) == 5
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
myList = []


```

</div>

</section>

## Solution
<section id='solution'>


```python
myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
]
```

</section>

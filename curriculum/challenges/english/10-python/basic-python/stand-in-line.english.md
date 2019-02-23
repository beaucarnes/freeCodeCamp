---
id: 5c55e842103ae886fa3ba964
title: Stand in Line
challengeType: 9
---

## Description
<section id='description'>
In Computer Science a <dfn>queue</dfn> is an abstract <dfn>Data Structure</dfn> where items are kept in order. New items can be added at the back of the <code>queue</code> and old items are taken off from the front of the <code>queue</code>.
Write a function <code>nextInLine</code> which takes a list (<code>list</code>) and a number (<code>item</code>) as arguments.
Add the number to the end of the list, then remove the first element of the list.
The <code>nextInLine</code> function should then return the element that was removed.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nextInLine([], 5)</code> should return a number.
    testString: isinstance(nextInLine([], 5), int)
    type: code
  - text: <code>nextInLine([], 1)</code> should return <code>1</code>
    testString: nextInLine([], 1) == 1
    type: code
  - text: <code>nextInLine([2], 1)</code> should return <code>2</code>
    testString: nextInLine([2], 1) == 2
    type: code
  - text: <code>nextInLine([5,6,7,8,9], 1)</code> should return <code>5</code>
    testString: nextInLine([5,6,7,8,9], 1) == 5
    type: code
  - text: After <code>nextInLine(testArr, 10)</code>, <code>testArr[4]</code> should be <code>10</code>
    testString: nextInLine(testArr, 10)<br>testArr[4] == 10
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
def nextInLine(list, item):
  # Your code here

  return item  # Change this line
}

# Test Setup
testList = [1,2,3,4,5]

# Display Code
print("Before: " + testList)
print(nextInLine(testList, 6)) # Modify this line to test
print("After: " + testList)
```

</div>

</section>

## Solution
<section id='solution'>


```python
testArr = [1,2,3,4,5]

def nextInLine(list, item):
  list.push(item)
  return list.pop(0)

# Display Code
print("Before: " + testList)
print(nextInLine(testList, 6)) # Modify this line to test
print("After: " + testList)
```

</section>

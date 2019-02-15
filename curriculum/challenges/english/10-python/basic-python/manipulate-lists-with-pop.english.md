---
id: 5c55e842103ae886fa3ba95e
title: Manipulate Lists With pop()
challengeType: 9
---

## Description
<section id='description'>
Another way to change the data in a list is with the <code>.pop()</code> function. The <code>.pop(i)</code> function will "pop" an item from a list at the given index and return it. By default (no <code>i</code> specified), <code>.pop()</code> removes the last item from the list and returns it. Any type of entry can be "popped" off of a list - numbers, strings, even nested lists.
<blockquote><code>tfourList = [1, 4, 6, 10]<br>theEnd = threeList.pop()<br>theSecond = threeList.pop(1)<br>print(theEnd) # Returns 10<br>print(theSecond) # Returns 4<br>print(threeList) # Returns [1, 6]</code></blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>.pop()</code> function to remove the first and last item from <code>myList</code>, assigning the "popped off" values to <code>firstFromMyList</code> and <code>lastFromMyList</code> respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should only contain <code>123</code>.
    testString: myArray == [ 123 ]
    type: code
  - text: <code>firstFromMyArray</code> should be 99
    testString: firstFromMyArray == 99
    type: code
  - text: <code>lastFromMyArray</code> should be 777
    testString: lastFromMyArray == 777
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
ourList = [1,2,3]
removedFromOurList = ourList.pop()
# removedFromOurList now equals 3, and ourList now equals [1,2]

# Setup
myList = [99, 123, 777]

# Only change code below this line.
firstFromMyList
lastFromMyList

```

</div>

</section>

## Solution
<section id='solution'>


```python
# Setup
myList = [99, 123, 777]

# Only change code below this line.
firstFromMyList = myList.pop(0)
lastFromMyList = myList.pop()
```

</section>

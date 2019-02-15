---
id: 5c55e842103ae886fa3ba95e
title: Manipulate Lists With pop()
challengeType: 9
---

## Description
<section id='description'>
Another way to change the data in a list is with the <code>.pop()</code> function.
<code>.pop()</code> is used to "pop" a value off of the end of a list. We can store this "popped off" value by assigning it to a variable. In other words, <code>.pop()</code> removes the last element from a list and returns that element.
Any type of entry can be "popped" off of a list - numbers, strings, even nested lists.
<blockquote><code>threeList = [1, 4, 6]<br>oneDown = threeList.pop()<br>print(oneDown) # Returns 6<br> print(threeList) # Returns [1, 4]</code></blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>.pop()</code> function to remove the last item from <code>myList</code>, assigning the "popped off" value to <code>removedFromMyList</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should only contain <code>[["John", 23]]</code>.
    testString: assert((function(d){if(d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), '<code>myArray</code> should only contain <code>[["John", 23]]</code>.');
  - text: Use <code>pop()</code> on <code>myArray</code>
    testString: assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), 'Use <code>pop()</code> on <code>myArray</code>');
  - text: <code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.
    testString: assert((function(d){if(d[0] == 'cat' && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), '<code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.');

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
myList = [["John", 23], ["cat", 2]]

# Only change code below this line.
removedFromMyList

```

</div>

</section>

## Solution
<section id='solution'>


```python
myList = [["John", 23], ["cat", 2]]
removedFromMyList = myList.pop()
```

</section>

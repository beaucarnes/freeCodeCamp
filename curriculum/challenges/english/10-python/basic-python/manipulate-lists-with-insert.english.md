---
id: 5c55e842103ae886fa3ba961
title: Manipulate Lists With insert()
challengeType: 9
---

## Description
<section id='description'>
Not only can you <code>pop</code> elements off of the list, you can also <code>insert</code> elements anywhere in an list.
<code>insert()</code> works similar to <code>.append()</code>, but instead of adding the element at the end of the array, <code>insert()</code> adds the element to a specified index within the list. The first argument of the <code>insert(i, a)</code> method is the index to add the item, specified by the second argument.

Here is an example of adding the item <code>["Dog", 99]</code> to the front of a list: <code>list.insert(0, ["Dog", 99])</code>
</section>

## Instructions
<section id='instructions'>
Add <code>["Paul",35]</code> to the beginning of the <code>myList</code> variable using <code>insert()</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> should now have [["Paul", 35], ["dog", 3]].
    testString: myList[0] == ["Paul", 35] && myList[1] == ["dog", 3]
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
ourList = ["Stimpson", "J", "cat"]
ourList.pop(0) # ourList now equals ["J", "cat"]
ourList.insert(0, "Happy")
# ourList now equals ["Happy", "J", "cat"]

# Setup
myList = [["John", 23], ["dog", 3]]
myList.pop(0)

# Only change code below this line.


```

</div>

</section>

## Solution
<section id='solution'>


```python
myArray = [["John", 23], ["dog", 3]]
myArray.pop(0)
myArray.insert(0, ["Paul", 35])
```

</section>

---
id: 5c55e842103ae886fa3ba953
title: Modify List Data With Indexes
challengeType: 9
---

## Description
<section id='description'>
Unlike strings, the entries of lists are <dfn>mutable</dfn> and can be changed freely.
<strong>Example</strong>
<blockquote>ourList = [50,40,30]<br>ourList[0] = 15 # equals [15,40,30]</blockquote>
<strong>Note</strong><br>There shouldn't be any spaces between the list name and the square brackets, like <code>list [0]</code>.
</section>

## Instructions
<section id='instructions'>
Modify the data stored at index <code>0</code> of <code>myList</code> to a value of <code>45</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> should now be [45,64,99].
    testString: myList[0] == 45 && myList[1] == 64 && myList[2] == 99
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
ourList = [18,64,99]
ourList[1] = 45 # ourList now equals [18,45,99].

# Setup
myList = [18,64,99]

# Only change code below this line.


```

</div>

</section>

## Solution
<section id='solution'>


```python
myList = [18,64,99]
myList[0] = 45
```

</section>

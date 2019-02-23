---
id: 5c54ce0f103ae886fa3ba927
title: Assignment with a Returned Value
challengeType: 9
guideUrl: 'https://www.freecodecamp.org/guide/certificates/assignment-with-a-returned-value'
---

## Description
<section id='description'>
If you'll recall from our discussion of <a href="python-algorithms-and-data-structures/basic-python/storing-values-with-the-assignment-operator" target="_blank">Storing Values with the Assignment Operator</a>, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
Assume we have pre-defined a function <code>sum</code> which adds two numbers together, then:
<code>ourSum = sum(5, 12)</code>
will call <code>sum</code> function, which returns a value of <code>17</code> and assigns it to <code>ourSum</code> variable.
</section>

## Instructions
<section id='instructions'>
Call the <code>processArg</code> function with an argument of <code>7</code> and assign its return value to the variable <code>processed</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code> should have a value of <code>2</code>
    testString: processed == 2
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
changed = 0

def change(num):
  return (num + 5) / 3

changed = change(10)

# Setup
processed = 0

def processArg(num):
  return (num + 3) / 5

# Only change code below this line


```

</div>

</section>

## Solution
<section id='solution'>


```python
processed = 0

def processArg(num):
  return (num + 3) / 5

processed = processArg(7)
```

</section>

---
id: 5c55e842103ae886fa3ba96a
title: Understanding Boolean Values
challengeType: 9
---

## Description
<section id='description'>
Another data type is the <dfn>Boolean</dfn>. <code>Booleans</code> may only be one of two values: <code>true</code> or <code>false</code>. They are basically little on-off switches, where <code>true</code> is "on" and <code>false</code> is "off."  These two states are mutually exclusive.
<strong>Note</strong><br><code>Boolean</code> values are never written with quotes. The <code>strings</code> <code>"true"</code> and <code>"false"</code> are not <code>Boolean</code> and have no special meaning in Python.
</section>

## Instructions
<section id='instructions'>
Modify the <code>welcomeToBooleans</code> function so that it returns <code>true</code> instead of <code>false</code> when the run button is clicked.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.
    testString: assert(typeof welcomeToBooleans() === 'boolean', 'The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.');
  - text: <code>welcomeToBooleans()</code> should return true.
    testString: assert(welcomeToBooleans() === true, '<code>welcomeToBooleans()</code> should return true.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
function welcomeToBooleans() {

  // Only change code below this line.

  return false; // Change this line

  // Only change code above this line.
}
```

</div>


### After Test
<div id='js-teardown'>

```python
welcomeToBooleans();
```

</div>

</section>

## Solution
<section id='solution'>


```python
function welcomeToBooleans() {
  return true; // Change this line
}
```

</section>

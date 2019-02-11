---
id: 5c55e842103ae886fa3ba938
title: Compound Assignment With Augmented Division
challengeType: 9
---

## Description
<section id='description'>
The <code>/=</code> operator divides a variable by another number.
<code>my_var = my_var / 5</code>
Will divide <code>my_var</code> by <code>5</code>. This can be rewritten as:
<code>my_var /= 5</code>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>/=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>4</code>
    testString: a == 4
    type: code
  - text: <code>b</code> should equal <code>27</code>
    testString: b == 27
    type: code
  - text: <code>c</code> should equal <code>3</code>
    testString: c == 3
    type: code
  - text: You should use the <code>-=</code> operator for each variable
    testString: input => input.match(/\/=/g).length === 3
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
var a = 48
var b = 108
var c = 33

# Only modify code below this line

a = a / 12
b = b / 4
c = c / 11

```

</div>

</section>

## Solution
<section id='solution'>


```python
var a = 48
var b = 108
var c = 33

a /= 12
b /= 4
c /= 11
```

</section>

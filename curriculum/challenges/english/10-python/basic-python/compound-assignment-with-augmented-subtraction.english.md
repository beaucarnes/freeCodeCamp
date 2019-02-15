---
id: 5c55e842103ae886fa3ba93a
title: Compound Assignment With Augmented Subtraction
challengeType: 9
---

## Description
<section id='description'>
Like the <code>+=</code> operator, <code>-=</code> subtracts a number from a variable.
<code>my_var = my_var - 5</code>
will subtract <code>5</code> from <code>my_var</code>. This can be rewritten as:
<code>my_var -= 5</code>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>-=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>5</code>
    testString: a == 5
    type: code
  - text: <code>b</code> should equal <code>-6</code>
    testString: b == -6
    type: code
  - text: <code>c</code> should equal <code>2</code>
    testString: c == 2
    type: code
  - text: You should use the <code>-=</code> operator for each variable
    testString: input => input.match(/\-=/g).length === 3
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
var a = 11
var b = 9
var c = 3

# Only modify code below this line

a = a - 6
b = b - 15
c = c - 1

```

</div>

</section>

## Solution
<section id='solution'>


```python
var a = 11
var b = 9
var c = 3

a -= 6
b -= 15
c -= 1
```

</section>

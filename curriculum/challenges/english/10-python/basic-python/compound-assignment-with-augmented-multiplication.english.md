---
id: 5c55e842103ae886fa3ba939
title: Compound Assignment With Augmented Multiplication
challengeType: 9
---

## Description
<section id='description'>
The <code>*=</code> operator multiplies a variable by a number.
<code>my_var = my_var * 5</code>
will multiply <code>my_var</code> by <code>5</code>. This can be rewritten as:
<code>my_var *= 5</code>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>*=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>25</code>
    testString: a == 25
    type: code
  - text: <code>b</code> should equal <code>36</code>
    testString: b == 36
    type: code
  - text: <code>c</code> should equal <code>46</code>
    testString: c == 46
    type: code
  - text: You should use the <code>-=</code> operator for each variable
    testString: input => input.match(/\*=/g).length === 3
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
a = 5
b = 12
c = 4.6

# Only modify code below this line

a = a * 5
b = 3 * b
c = c * 10


```
</div>

</section>

## Solution
<section id='solution'>


```python
a = 5
b = 12
c = 4.6

a *= 5
b *= 3
c *= 10
```

</section>

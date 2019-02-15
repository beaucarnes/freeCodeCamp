---
id: 5c55e842103ae886fa3ba937
title: Compound Assignment With Augmented Addition
challengeType: 9
---

## Description
<section id='description'>
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
<code>my_var = my_var + 5</code>
to add <code>5</code> to <code>my_var</code>. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.
One such operator is the <code>+=</code> operator.
<blockquote>my_var = 1<br>my_var += 5<br>print(my_var) // Returns 6</blockquote>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>+=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>15</code>
    testString: a == 15
    type: code
  - text: <code>b</code> should equal <code>26</code>
    testString: b == 26
    type: code
  - text: <code>c</code> should equal <code>19</code>
    testString: c == 19
    type: code
  - text: You should use the <code>+=</code> operator for each variable
    testString: input => input.match(/\+=/g).length === 3
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
a = 3
b = 17
c = 12

# Only modify code below this line

a = a + 12
b = 9 + b
c = c + 7

```

</div>

</section>

## Solution
<section id='solution'>


```python
a = 3
b = 17
c = 12

a += 12
b += 9
c += 7
```

</section>

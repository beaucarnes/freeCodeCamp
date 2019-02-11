---
id: 5c55e842103ae886fa3ba953
title: Increment a Number with Python
challengeType: 9
---

## Description
<section id='description'>
You can easily <dfn>increment</dfn> or add one to a variable with the <code>++</code> operator.
<code>i++</code>
is the equivalent of
<code>i = i + 1</code>
<strong>Note</strong><br>The entire line becomes <code>i++</code>, eliminating the need for the equal sign.
</section>

## Instructions
<section id='instructions'>
Change the code to use the <code>++</code> operator on <code>my_var</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_var</code> should equal <code>88</code>
    testString: my_var == 88
    type: code
  - text: <code>my_var = my_var + 1</code> should be changed
    testString: input => !input.includes('my_var = my_var + 1')
  - text: Use the <code>++</code> operator
    testString: input => input.includes('my_var++')
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
my_var = 87;

# Only change code below this line
my_var = my_var + 1

```

</div>

</section>

## Solution
<section id='solution'>


```python
my_var = 87;
my_var++;
```

</section>

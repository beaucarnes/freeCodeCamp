---
id: 5c55e842103ae886fa3ba947
title: Divide One Number by Another with Python
challengeType: 9
---

## Description
<section id='description'>
We can also divide one number by another.
Python uses the <code>/</code> symbol for division.

<strong>Example</strong>
<blockquote>my_var = 16 / 2; // assigned 8</blockquote>

</section>

## Instructions
<section id='instructions'>
Change the <code>0</code> so that the <code>quotient</code> is equal to <code>2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make the variable <code>quotient</code> equal to 2.
    testString: assert(quotient === 2, 'Make the variable <code>quotient</code> equal to 2.');
  - text: Use the <code>/</code> operator
    testString: assert(/\d+\s*\/\s*\d+/.test(code), 'Use the <code>/</code> operator');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
var quotient = 66 / 0;


```

</div>


### After Test
<div id='js-teardown'>

```python
(function(z){return 'quotient = '+z;})(quotient);
```

</div>

</section>

## Solution
<section id='solution'>


```python
var quotient = 66 / 33;
```

</section>

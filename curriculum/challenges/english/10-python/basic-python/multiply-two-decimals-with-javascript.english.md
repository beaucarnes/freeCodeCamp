---
id: 5c55e842103ae886fa3ba955
title: Multiply Two Decimals with Python
challengeType: 9
---

## Description
<section id='description'>
In Python, you can also perform calculations with decimal numbers, just like whole numbers.
Let's multiply two decimals together to get their product.
</section>

## Instructions
<section id='instructions'>
Change the <code>0.0</code> so that product will equal <code>5.0</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>product</code> should equal <code>5.0</code>.
    testString: assert(product === 5.0, 'The variable <code>product</code> should equal <code>5.0</code>.');
  - text: You should use the <code>*</code> operator
    testString: assert(/\*/.test(code), 'You should use the <code>*</code> operator');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
var product = 2.0 * 0.0;


```

</div>


### After Test
<div id='js-teardown'>

```python
(function(y){return 'product = '+y;})(product);
```

</div>

</section>

## Solution
<section id='solution'>


```python
var product = 2.0 * 2.5;
```

</section>

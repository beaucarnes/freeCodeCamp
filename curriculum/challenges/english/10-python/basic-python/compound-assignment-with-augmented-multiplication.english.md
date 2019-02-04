---
id: 5c55e842103ae886fa3ba939
title: Compound Assignment With Augmented Multiplication
challengeType: 9
---

## Description
<section id='description'>
The <code>*=</code> operator multiplies a variable by a number.
<code>my_var = my_var * 5;</code>
will multiply <code>my_var</code> by <code>5</code>. This can be rewritten as:
<code>my_var *= 5;</code>
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
    testString: assert(a === 25, '<code>a</code> should equal <code>25</code>');
  - text: <code>b</code> should equal <code>36</code>
    testString: assert(b === 36, '<code>b</code> should equal <code>36</code>');
  - text: <code>c</code> should equal <code>46</code>
    testString: assert(c === 46, '<code>c</code> should equal <code>46</code>');
  - text: You should use the <code>*=</code> operator for each variable
    testString: assert(code.match(/\*=/g).length === 3, 'You should use the <code>*=</code> operator for each variable');
  - text: Do not modify the code above the line
    testString: assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), 'Do not modify the code above the line');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;


```

</div>


### After Test
<div id='js-teardown'>

```python
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

</div>

</section>

## Solution
<section id='solution'>


```python
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```

</section>

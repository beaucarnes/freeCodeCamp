---
id: 5c55e842103ae886fa3ba942
title: Decrement a Number with Python
challengeType: 9
---

## Description
<section id='description'>
You can easily <dfn>decrement</dfn> or decrease a variable by one with the <code>--</code> operator.
<code>i--;</code>
is the equivalent of
<code>i = i - 1;</code>
<strong>Note</strong><br>The entire line becomes <code>i--;</code>, eliminating the need for the equal sign.
</section>

## Instructions
<section id='instructions'>
Change the code to use the <code>--</code> operator on <code>my_var</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_var</code> should equal <code>10</code>
    testString: assert(my_var === 10, '<code>my_var</code> should equal <code>10</code>');
  - text: <code>my_var = my_var - 1;</code> should be changed
    testString: assert(/var\s*my_var\s*=\s*11;\s*\/*.*\s*([-]{2}\s*my_var|my_var\s*[-]{2});/.test(code), '<code>my_var = my_var - 1;</code> should be changed');
  - text: Use the <code>--</code> operator on <code>my_var</code>
    testString: assert(/[-]{2}\s*my_var|my_var\s*[-]{2}/.test(code), 'Use the <code>--</code> operator on <code>my_var</code>');
  - text: Do not change code above the line
    testString: assert(/var my_var = 11;/.test(code), 'Do not change code above the line');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
var my_var = 11;

// Only change code below this line
my_var = my_var - 1;

```

</div>


### After Test
<div id='js-teardown'>

```python
(function(z){return 'my_var = ' + z;})(my_var);
```

</div>

</section>

## Solution
<section id='solution'>


```python
var my_var = 11;
my_var--;
```

</section>

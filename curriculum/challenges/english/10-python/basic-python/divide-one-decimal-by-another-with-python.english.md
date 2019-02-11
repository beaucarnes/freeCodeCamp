---
id: 5c55e842103ae886fa3ba946
title: Divide One Decimal by Another with Python
challengeType: 9
---

## Description
<section id='description'>
Now let's divide one decimal by another.
</section>

## Instructions
<section id='instructions'>
Change the <code>0.0</code> so that <code>quotient</code> will equal to <code>2.2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>quotient</code> should equal <code>2.2</code>
    testString: quotient == 2.2
    type: code
  - text: You should use the <code>/</code> operator to divide 4.4 by 2
    testString: input => /4\.40*\s*\/\s*2\.*0*/.test(input)
    type: input
  - text: The quotient variable should only be assigned once
    testString: input => input.match(/quotient/g).length === 1
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
quotient = 0.0 / 2.0; # Fix this line


```

</div>

</section>

## Solution
<section id='solution'>

```python
quotient = 4.4 / 2.0
```
</section>

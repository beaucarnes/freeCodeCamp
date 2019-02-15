---
id: 5c55e842103ae886fa3ba94b
title: Finding a Remainder in Python
challengeType: 9
---

## Description
<section id='description'>
The <dfn>modulus operator</dfn> works on integers and yields the remainder when the first operand is divided by the second. In Python, the modulus operator is a percent sign <code>%</code>. 
The modulus operator is related to the floor division operator <code>//</code>. The floor division operator divides two integers and truncates the result to an integer. In other words, it rounds down the answer to a division problem.

The syntax for these are the same as for other operators:	
<blockquote>quotient = 7 // 3 # quotient equals 2<br>remainder = 7 % 3 # remainder equlas 1</blockquote>
So 7 divided by 3 is 2 with 1 left over.
The modulus operator turns out to be surprisingly useful. For example, you can check whether one number is divisible by another: if <code>x % y</code> is zero, then <code>x</code> is divisible by <code>y</code>.
You can also extract the right-most digit or digits from a number. For example, <code>x % 10</code> yields the right-most digit of <code>x</code> (in base 10). Similarly, <code>x % 100</code> yields the last two digits.
</section>

## Instructions
<section id='instructions'>
Set <code>remainder</code> equal to the remainder of <code>11</code> divided by <code>3</code> using the <dfn>modulus</dfn> (<code>%</code>) operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of <code>remainder</code> should be <code>2</code>
    testString: remainder == 2
    type: code
  - text: You should use the <code>%</code> operator
    testString: input => input.includes('%')
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
remainder = 0

```

</div>

</section>

## Solution
<section id='solution'>


```python
remainder =  11 % 3
```

</section>

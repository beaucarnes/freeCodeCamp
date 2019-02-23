---
id: 5c55e842103ae886fa3ba95f
title: Return a Value from a Function with Return
challengeType: 9
---

## Description
<section id='description'>
We can pass values into a function with <dfn>arguments</dfn>. You can use a <code>return</code> statement to send a value back out of a function.
<strong>Example</strong>
<blockquote>def plusThree(num):<br>&nbsp;&nbsp;return num + 3<br><br>answer = plusThree(5) # 8</blockquote>
<code>plusThree</code> takes an <dfn>argument</dfn> for <code>num</code> and returns a value equal to <code>num + 3</code>.
</section>

## Instructions
<section id='instructions'>
Create a function <code>timesFive</code> that accepts one argument, multiplies it by <code>5</code>, and returns the new value. See the last line in the editor for an example of how you can test your <code>timesFive</code> function.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code> should be a function
    testString: callable(timesFive)
    type: code
  - text: <code>timesFive(5)</code> should return <code>25</code>
    testString: timesFive(5) == 25
    type: code
  - text: <code>timesFive(2)</code> should return <code>10</code>
    testString: timesFive(2) == 10
    type: code
  - text: <code>timesFive(0)</code> should return <code>0</code>
    testString: timesFive(0) == 0
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
def minusSeven(num):
  return num - 7


# Only change code below this line



print(minusSeven(10))
```

</div>

</section>

## Solution
<section id='solution'>


```python
def timesFive(num):
  return num * 5

timesFive(10)
```

</section>

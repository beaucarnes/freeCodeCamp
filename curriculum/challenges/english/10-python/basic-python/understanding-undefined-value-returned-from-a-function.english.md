---
id: 5c55e842103ae886fa3ba96c
title: Understanding NoneType Value returned from a Function
challengeType: 9
---

## Description
<section id='description'>
A function can include the <code>return</code> statement but it does not have to. In the case that the function doesn't have a <code>return</code> statement, when you call it, the function processes the inner code but the returned value is considered <code>None</code> or <code>NoneType</code> (this is similar to <code>undefined</code> in JavaScript).
<strong>Example</strong>
<blockquote>sum = 0<br>def addSum(num):<br>&nbsp;&nbsp;global sum<br>&nbsp;&nbsp;sum = sum + num<br><br> returnedValue = addSum(3) # sum will be modified but returned value is none</blockquote>
<code>addSum</code> is a function without a <code>return</code> statement. The function will change the global <code>sum</code> variable but the returned value of the function is <code>none</code>
</section>

## Instructions
<section id='instructions'>
Create a function <code>addFive</code> without any arguments. This function adds 5 to the <code>sum</code> variable, but its returned value is <code>none</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code> should be a function
    testString: callable(addFive)
    type: code
  - text: <code>sum</code> should be equal to 8
    testString: sum == 8
    type: code
  - text: Returned value from <code>addFive</code> should be <code>undefined</code>
    testString: addFive() is None
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
sum = 0
def addThree():
  global sum
  sum = sum + 3


# Only change code below this line



# Only change code above this line
returnedValue = addFive()
```

</div>

</section>

## Solution
<section id='solution'>


```python
def addFive():
  global sum
  sum = sum + 5

```

</section>

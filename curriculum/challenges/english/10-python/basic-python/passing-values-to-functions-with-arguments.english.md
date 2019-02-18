---
id: 5c55e842103ae886fa3ba959
title: Passing Values to Functions with Arguments
challengeType: 9
---

## Description
<section id='description'>
<dfn>Parameters</dfn> are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or <dfn>"passed"</dfn>) into a function when it is called are known as <dfn>arguments</dfn>.
Here is a function with two parameters, <code>param1</code> and <code>param2</code>:
<blockquote>def testFun(param1, param2):<br>&nbsp;&nbsp;print(param1, param2)<br></blockquote>
Then we can call <code>testFun</code>:
<code>testFun("Hello", "World");</code>
We have passed two arguments, <code>"Hello"</code> and <code>"World"</code>. Inside the function, <code>param1</code> will equal "Hello" and <code>param2</code> will equal "World". Note that you could call <code>testFun</code> again with different arguments and the parameters would take on the value of the new arguments.
</section>

## Instructions
<section id='instructions'>
Create a function called <code>functionWithArgs</code> that accepts two arguments and outputs their sum to the dev console.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>functionWithArgs</code> should be a function
    testString: callable(functionWithArgs)
    type: code
  - text: <code>functionWithArgs(1,2)</code> should output <code>3</code>
    testString: output => output.includes('3')
    type: console
  - text: <code>functionWithArgs(7,9)</code> should output <code>16</code>
    testString: output => output.includes('16')
    type: console

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
def ourFunctionWithArgs(a, b):
  print(a - b)

ourFunctionWithArgs(10, 5) # Outputs 5

# Only change code below this line.

# Only change code above this line.
functionWithArgs(1, 2)
functionWithArgs(7, 9)
```

</div>

</section>

## Solution
<section id='solution'>


```python
def functionWithArgs(a, b):
  print(a + b)

functionWithArgs(1, 2)
functionWithArgs(7, 9)
```

</section>

---
id: 5c55e842103ae886fa3ba95c
title: Local Scope and Functions
challengeType: 9
---

## Description
<section id='description'>
In the previous challenge we showed you a code block:
<blockquote>
def f():
  print(s)
  s = "CampCodeFree"
  print(s)

s = "FreeCodeCamp"
f()
print(s)
</blockquote>
This code block throws an error because the print method on line 2 is trying to reference a variable before it is assigned locally (line 3). The reassignment of variable <code>s</code> within the function <code>f</code> is a demonstration of Python's local variable scoping. Variables defined within functions are limited to that function's <strong>local</strong> scope. Other functions and the global process do not have access to those variables. Local variables do not overwrite global variables that share a similar name unless you use the <code>global</code> keyword shown off in the previous challenge. For example:
<blockquote>
def f():
  a = "Kale Salad, Yum!"
  print(a)

a = "Hello, World!"
f()
print(a)
</blockquote>
Will result in <code>"Kale Salad, Yum!"</code> being printed first and <code>"Hello, World!"</code> being printed second.

</section>

## Instructions
<section id='instructions'>
Practice using local variables; within the function <code>f</code> assign the value 99 to the variable <code>a</code>. Do not delete any other lines of code
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Program should ouput 'Local 99'
    testString: output => output.includes('Local 99')
    type: console
  - text: Program should output 'Global 0'
    testString: output => output.includes('Global 0')
    type: console
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
def f():
  # assign value here
  print('Local ' + a)

a = 0
print('Global ' + a)
f()
```

</div>

</section>

## Solution
<section id='solution'>


```python
def f():
  a = 99
  print('Local ' + a)

a = 0
print('Global ' + a)
f()
```

</section>

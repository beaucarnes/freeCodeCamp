---
id: 5c55e842103ae886fa3ba950
title: Global Scope and Functions
challengeType: 9
---

## Description
<section id='description'>
In Python, <dfn>scope</dfn> refers to the visibility of variables. Variables defined outside of a function are considerd <strong>global</strong> scoped variables. Handling global variables is tricky in python. Take a look at the following code block:
<blockquote>
def f():
  print(s)

s = "FreeCodeCamp"
f()
print(s)
</blockquote>
This code block will print the string "FreeCodeCamp" to the console twice without error because the reference to s within f() is never reassigned. Now if we change the code block to:
<blockquote>
def f():
  print(s)
  s = "CampCodeFree"
  print(s)

s = "FreeCodeCamp"
f()
print(s)
</blockquote>
This will result in an error: <code>Line 2: local variable 's' referenced before assignment</code>. This error is thrown because of how Python handles something called <strong>local</strong> scope which we will learn about in the next challenge. To fix the second code block we need to use the <code>global</code> keyword.
<blockquote>
def f():
  global s
  print(s)
  s = "CampCodeFree"
  print(s)

s = "FreeCodeCamp"
f()
print(s)
</blockquote>
Now this code block will result in the string <code>"CampCodeFree"</code> being printed twice because the <code>s</code> variable within <code>f()</code> is referencing the global scope <code>s</code> variable.
</section>

## Instructions
<section id='instructions'>
Declare a variable called <code>myGlobal</code> outside of any function. Initialize it with a value of <code>10</code>. Inside a function <code>f</code>, properly modify the <code>myGlobal</code> variable from within the function. Assign the value <code>5</code> to it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myGlobal</code> should be defined
    testString: myGlobal in globals()
    type: code
  - text: <code>myGlobal</code> should be initialized with the value <code>10</code>
    testString: output => output.includes('Initial 10')
    type: console
  - text: <code>myGlobal</code> should be modified to the value <code>5</code>
    testString: output => output.includes('After 5')
    type: console
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Declare your myGlobal variable here


def f():
  # Reference and modify myGlobal within this function


# Only change code above this line
print('Initial ' + myGlobal)
f()
print('After ' + myGlobal)
```

</div>

</section>

## Solution
<section id='solution'>


```python
# Declare your myGlobal variable here
myGlobal = 10

def f():
  # Reference and modify myGlobal within this function
  global myGlobal
  myGlobal = 5

# Only change code above this line
print('Initial ' + myGlobal)
f()
print('After ' + myGlobal)
```

</section>

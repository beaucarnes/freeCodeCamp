---
id: 5c55e842103ae886fa3ba97b
title: Write Reusable Python with Functions
challengeType: 9
---

## Description
<section id='description'>
In Python, we can divide up our code into reusable parts called <dfn>functions</dfn>.
Here's an example of a function:
<blockquote>def functionName():<br>&nbsp;&nbsp;print("Hello World")<br></blockquote>
You can call or <dfn>invoke</dfn> this function by using its name followed by parentheses, like this:
<code>functionName()</code>
Each time the function is called it will print out the message <code>"Hello World"</code> on the dev console. All of the code indented under the function definition will be included in the function execution.
</section>

## Instructions
<section id='instructions'>
<ol><li>Create a function called <code>reusableFunction</code> which prints <code>"Hi World"</code>.</li><li>Call the function.</li></ol>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reusableFunction</code> should be a function
    testString: callable(reusableFunction)
    type: code
  - text: <code>reusableFunction</code> should output "Hi World" to the dev console
    testString: output => output.includes("Hi World")
    type: console

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
def ourReusableFunction():
  print("Heyya, World")


ourReusableFunction()

# Only change code below this line

```

</div>

</section>

## Solution
<section id='solution'>


```python
def reusableFunction():
  print("Hi World")

reusableFunction()
```

</section>

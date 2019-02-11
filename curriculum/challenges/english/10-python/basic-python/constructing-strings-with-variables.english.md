---
id: 5c55e842103ae886fa3ba93d
title: Constructing Strings with Variables
challengeType: 9
---

## Description
<section id='description'>
Sometimes you will need to build a string, <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> style. By using the <code>+</code> operator, you can insert one or more variables into a string you're building.
</section>

## Instructions
<section id='instructions'>
Set <code>my_name</code> to a string equal to your name and build <code>my_str</code> with <code>my_name</code> between the strings <code>"My name is "</code> and <code>" and I am well!"</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_name</code> should be set to a string at least 3 characters long
    testString: type(my_name) is str && len(my_name) > 2
    type: code
  - text: Use two <code>+</code> operators to build <code>my_str</code> with <code>my_name</code> inside it
    textString: input => input.includes('" + my_name + "') || input.includes("' + my_name + '")
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
our_name = "freeCodeCamp"
our_str = "Hello, our name is " + our_name + ", how are you?"

# Only change code below this line
my_name = ""
my_str = ""


```

</div>

</section>

## Solution
<section id='solution'>


```python
my_name = "Quincy"
my_str = "My name is " + my_name + " and I am well!"
```

</section>

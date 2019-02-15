---
id: 5c55e842103ae886fa3ba969
title: Understand String Immutability
challengeType: 9
---

## Description
<section id='description'>
In Python, <code>string</code> values are <dfn>immutable</dfn>, which means that they cannot be altered once created.
For example, the following code:
<blockquote>my_str = "Bob"<br>my_str[0] = "J"</blockquote>
cannot change the value of <code>my_str</code> to "Job", because the contents of <code>my_str</code> cannot be altered. Note that this does <em>not</em> mean that <code>my_str</code> cannot be changed, just that the individual characters of a <dfn>string literal</dfn> cannot be changed. The only way to change <code>my_str</code> would be to assign it with a new string, like this:
<blockquote>my_str = "Bob"<br>my_str = "Job"</blockquote>
</section>

## Instructions
<section id='instructions'>
Correct the assignment to <code>my_str</code> so it contains the string value of <code>Hello World</code> using the approach shown in the example above.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_str</code> should have a value of <code>Hello World</code>
    testString: my_str == "Hello World"
    type: code
  - text: Do not change the code above the line
    testString: input => input.contains('my_str = "Jello World"')
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Setup
my_str = "Jello World"

# Only change code below this line

my_str[0] = "H" # Fix Me


```

</div>


</section>

## Solution
<section id='solution'>


```python
my_str = "Jello World"
my_str = "Hello World"
```

</section>

---
id: 5c55e842103ae886fa3ba941
title: Declare String Variables
challengeType: 9
---

## Description
<section id='description'>
Previously we have used the code
<code>myName = "your name"</code>
<code>"your name"</code> is called a <dfn>string literal</dfn>. It is a string because it is a series of zero or more characters enclosed in single or double quotes.
</section>

## Instructions
<section id='instructions'>
Create two new <code>string</code> variables: <code>my_first_name</code> and <code>my_last_name</code> and assign them the values of your first and last name, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_first_name</code> should be a string with at least one character in it.
    testString: isinstance(my_first_name, basestring) && len(my_first_name) >= 1
    type: code
  - text: <code>my_last_name</code> should be a string with at least one character in it.
    testString: isinstance(my_last_name, basestring) && len(my_last_name) >= 1
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
first_name = "Alan"
last_name = "Turing"

# Only change code below this line


```

</div>

</section>

## Solution
<section id='solution'>


```python
my_first_name = "Alan"
my_last_name = "Turing"
```

</section>

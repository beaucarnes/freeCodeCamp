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
Create two new <code>string</code> variables: <code>myFirstName</code> and <code>myLastName</code> and assign them the values of your first and last name, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code> should be a string with at least one character in it.
    testString: isinstance(myFirstName, basestring) && len(myFirstName) >= 1
    type: code
  - text: <code>myLastName</code> should be a string with at least one character in it.
    testString: isinstance(myLastName, basestring) && len(myLastName) >= 1
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
firstName = "Alan"
lastName = "Turing"

# Only change code below this line


```

</div>

</section>

## Solution
<section id='solution'>


```python
myFirstName = "Alan"
myLastName = "Turing"
```

</section>

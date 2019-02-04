---
id: 5c55e842103ae886fa3ba96f
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 9
---

## Description
<section id='description'>
In order to get the last letter of a string, you can subtract one from the string's length.
For example, if <code>var firstName = "Charles"</code>, you can get the value of the last letter of the string by using <code>firstName[firstName.length - 1]</code>.
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the last character in the <code>lastName</code> variable.
<strong>Hint</strong><br>Try looking at the <code>lastLetterOfFirstName</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code> should be "e".
    testString: assert(lastLetterOfLastName === "e", '<code>lastLetterOfLastName</code> should be "e".');
  - text: You have to use <code>.length</code> to get the last letter.
    testString: assert(code.match(/\.length/g).length === 2, 'You have to use <code>.length</code> to get the last letter.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```python
(function(v){return v;})(lastLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```python
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```

</section>

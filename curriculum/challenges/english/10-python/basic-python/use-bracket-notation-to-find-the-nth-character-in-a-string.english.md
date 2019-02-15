---
id: 5c55e842103ae886fa3ba970
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 9
---

## Description
<section id='description'>
You can also use <dfn>bracket notation</dfn> to get the character at other positions within a string.
Remember that computers start counting at <code>0</code>, so the first character is actually the zeroth character.
</section>

## Instructions
<section id='instructions'>
Let's try to set <code>third_letter_of_last_name</code> to equal the third letter of the <code>last_name</code> variable using bracket notation.
<strong>Hint</strong><br>Try looking at the <code>second_letter_of_first_name</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>third_letter_of_last_name</code> variable should have the value of <code>v</code>.
    testString: third_letter_of_last_name == 'v'
    type: code
  - text: You should use bracket notation.
    testString: input => input.match(/third_letter_of_last_name\s*?=\s*?last_name\[.*?\]/)
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
first_name = "Ada"
second_letter_of_first_name = first_name[1]

# Setup
last_name = "Lovelace"

# Only change code below this line.
third_letter_of_last_name = last_name


```

</div>


</section>

## Solution
<section id='solution'>


```python
last_name = "Lovelace"
third_letter_of_last_name = last_name[2]
```

</section>

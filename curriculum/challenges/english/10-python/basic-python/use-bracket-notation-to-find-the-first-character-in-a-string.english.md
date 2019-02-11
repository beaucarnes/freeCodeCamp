---
id: 5c55e842103ae886fa3ba971
title: Use Bracket Notation to Find the First Character in a String
challengeType: 9
---

## Description
<section id='description'>
<code>Bracket notation</code> is a way to get a character at a specific <code>index</code> within a string.
Most modern programming languages, like Python, don't start counting at 1 like humans do. They start at 0. This is referred to as <dfn>Zero-based</dfn> indexing.
For example, the character at index 0 in the word "Charles" is "C". So if <code>first_name = "Charles"</code>, you can get the value of the first letter of the string by using <code>first_name[0]</code>.
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the first character in the <code>last_name</code> variable and assign it to <code>first_letter_of_last_name</code>.
<strong>Hint</strong><br>Try looking at the <code>first_letter_of_first_name</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>first_letter_of_last_name</code> variable should have the value of <code>L</code>.
    testString: first_letter_of_last_name == 'L'
    type: code
  - text: You should use bracket notation.
    testString: input => input.contains("last_name[0]")
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
first_letter_of_first_name = ""
first_name = "Ada"

first_letter_of_first_name = first_name[0]

# Setup
first_letter_of_last_name = ""
last_name = "Lovelace"

# Only change code below this line
first_letter_of_last_name = last_name


```

</div>


</section>

## Solution
<section id='solution'>


```python
first_letter_of_last_name = ""
last_name = "Lovelace"

# Only change code below this line
first_letter_of_last_name = last_name[0]
```

</section>

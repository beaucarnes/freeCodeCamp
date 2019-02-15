---
id: 5c55e842103ae886fa3ba96f
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 9
---

## Description
<section id='description'>
In order to get the last letter of a string, you can subtract one from the string's length.
For example, if <code>first_name = "Charles"</code>, you can get the value of the last letter of the string by using <code>first_name[len(first_name) - 1]</code>.
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the last character in the <code>last_name</code> variable.
<strong>Hint</strong><br>Try looking at the <code>last_letter_of_first_name</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>last_letter_of_last_name</code> should be "e".
    testString: last_letter_of_last_name == "e"
    type: code
  - text: You have to use <code>len()</code> to get the last letter.
    testString: input => input.match(/len\(/g).length === 2
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
first_name = "Ada"
last_letter_of_first_name = first_name[len(first_name) - 1]

# Setup
last_name = "Lovelace"

# Only change code below this line.
last_letter_of_last_name = last_name


```

</div>


</section>

## Solution
<section id='solution'>


```python
first_name = "Ada"
last_letter_of_first_name = first_name[len(first_name) - 1]

last_name = "Lovelace"
last_letter_of_last_name = last_name[len(last_name) - 1]
```

</section>

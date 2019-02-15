---
id: 5c55e842103ae886fa3ba972
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 9
---

## Description
<section id='description'>
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
For example, you can get the value of the third-to-last letter of the <code>first_name = "Charles"</code> string by using <code>first_name[len(first_name) - 3]</code>
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the second-to-last character in the <code>last_name</code> string.
<strong>Hint</strong><br>Try looking at the <code>third_to_last_letter_of_first_name</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>second_to_last_letter_of_last_name</code> should be "c".
    testString: second_to_last_letter_of_last_name == 'c'
    type: code
  - text: You have to use <code>len()</code> to get the second last letter.
    testString: input -> input.match(/len\(/g).length === 2
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
// Example
first_name = "Ada"
third_to_last_letter_of_first_name = first_name[len(first_name) - 3]

// Setup
last_name = "Lovelace"

// Only change code below this line
second_to_last_letter_of_last_name = last_name


```

</div>


</section>

## Solution
<section id='solution'>


```python
first_name = "Ada"
third_to_last_letter_of_first_name = first_name[len(first_name) - 3]

last_name = "Lovelace"
second_to_last_letter_of_last_name = last_name[len(last_name) - 2]
```

</section>

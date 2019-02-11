---
id: 5c55e842103ae886fa3ba94a
title: Find the Length of a String
challengeType: 9
---

## Description
<section id='description'>
You can find the length of a <code>string</code> value using the <code>len()</code> function. Just put the string inside the parentheses.
<code>len("Alan Peter") # 10</code>
For example, if we created a variable <code>first_name = "Charles"</code>, we could find the length of the string <code>"Charles"</code> with the code <code>len(first_name)</code>.
</section>

## Instructions
<section id='instructions'>
Use the <code>len()</code> function to count the number of characters in the <code>last_name</code> variable and assign it to <code>last_name_length</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>last_name_length</code> should be equal to eight.
    testString: last_name_length == 8
  - text: 'You should be getting the length of <code>last_name</code> by using <code>len()</code> like this: <code>len(last_name)</code>.'
    testString: input => input.contains(len(last_name))

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
first_name_length = 0
first_name = "Ada"

first_name_length = len(first_name)

# Setup
last_name_length = 0
last_name = "Lovelace"

# Only change code below this line.

last_name_length = last_name


```

</div>


## Solution
<section id='solution'>


```python
first_name_length = 0
first_name = "Ada"
first_name_length = len(first_name)

last_name_length = 0
last_name = "Lovelace"
last_name_length = len(last_name)
```

</section>

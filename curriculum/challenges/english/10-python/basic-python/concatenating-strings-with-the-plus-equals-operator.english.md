---
id: 5c55e842103ae886fa3ba93c
title: Concatenating Strings with the Plus Equals Operator
challengeType: 9
---

## Description
<section id='description'>
We can also use the <code>+=</code> operator to <dfn>concatenate</dfn> a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.
<strong>Note</strong><br>Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
</section>

## Instructions
<section id='instructions'>
Build <code>my_str</code> over several lines by concatenating these two strings: <code>"This is the first sentence. "</code> and <code>"This is the second sentence."</code> using the <code>+=</code> operator. Use the <code>+=</code> operator similar to how it is shown in the editor. Start by assigning the first string to <code>my_str</code>, then add on the second string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_str</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>
    testString: my_str == "This is the first sentence. This is the second sentence."
    type: code
  - text: Use the <code>+=</code> operator to build <code>my_str</code>
    testString: input => input.includes('+=')
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
our_str = "I come first. "
our_str += "I come second."

# Only change code below this line

my_str = "";

```

</div>

</section>

## Solution
<section id='solution'>


```python
our_str = "I come first. "
our_str += "I come second."

my_str = "This is the first sentence. "
my_str += "This is the second sentence."
```

</section>

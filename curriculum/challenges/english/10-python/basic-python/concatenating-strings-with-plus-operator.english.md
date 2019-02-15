---
id: 5c55e842103ae886fa3ba93b
title: Concatenating Strings with Plus Operator
challengeType: 9
---

## Description
<section id='description'>
In Python, when the <code>+</code> operator is used between <code>String</code> values, it concatenates the strings together. You can build a new string out of other strings.
<strong>Example</strong>
<blockquote>'My name is Alan,' + ' I concatenate.'</blockquote>
<strong>Note</strong><br>Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
</section>

## Instructions
<section id='instructions'>
Build <code>my_str</code> from the strings <code>"This is the start. "</code> and <code>"This is the end."</code> using the <code>+</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_str</code> should have a value of <code>This is the start. This is the end.</code>
    testString: my_str == "This is the start. This is the end."
    type: code
  - text: Use the <code>+</code> operator
    testString: input => input.includes('+')
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
our_str = "I come first. " + "I come second."

# Only change code below this line

my_str = ""


```

</div>

</section>

## Solution
<section id='solution'>


```python
ourStr = "I come first. " + "I come second."
my_str = "This is the start. " + "This is the end."
```

</section>

---
id: 5c54ce0f103ae886fa3ba926
title: Appending Variables to Strings
challengeType: 9
guideUrl: 'https://www.freecodecamp.org/guide/certificates/appending-variables-to-strings'
---

## Description
<section id='description'>
Just as we can build a string over multiple lines out of string <dfn>literals</dfn>, we can also append variables to a string using the plus equals (<code>+=</code>) operator.
</section>

## Instructions
<section id='instructions'>
Set <code>some_adjective</code> and append it to <code>my_str</code> using the <code>+=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>some_adjective</code> should be set to a string at least 3 characters long
    testString: len(some_adjective) > 2
    type: code
  - text: Append <code>some_adjective</code> to <code>my_str</code> using the <code>+=</code> operator
    testString: input => input.contains("my_str += some_adjective")
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
# Example
an_adjective = "awesome!"
our_str = "freeCodeCamp is "
our_str += an_adjective

# Only change code below this line

some_adjective = ""
my_str = "Learning to code is "

```

</div>


</section>

## Solution
<section id='solution'>


```python
an_adjective = "awesome!"
our_str = "freeCodeCamp is "
our_str += an_adjective

some_adjective = "neat"
my_str = "Learning to code is "
my_str += some_adjective
```

</section>

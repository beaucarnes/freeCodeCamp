---
id: 5c55e842103ae886fa3ba95c
title: Quoting Strings with Single Quotes
challengeType: 9
---

## Description
<section id='description'>
<dfn>String</dfn> values in Python may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in Python.
<blockquote>double_quote_str = "This is a string" <br/>single_quote_str = 'This is also a string'</blockquote>
The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <code>&#60;a&#62;</code> tag with various attributes in quotes, all within a string.
<blockquote>conversation = 'Finn exclaims to Jake, "Algebraic!"'</blockquote>
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
<blockquote>good_str = 'Jake asks Finn, "Hey, let\'s go on an adventure?"' <br/>bad_str = 'Finn responds, "Let's go!"' # Throws an error</blockquote>
In the <dfn>good_str</dfn> above, you can use both quotes safely by using the backslash <code>\</code> as an escape character.
<strong>Note</strong><br/>The backslash <code>\</code> should not be confused with the forward slash <code>/</code>. They do not do the same thing.
</section>

## Instructions
<section id='instructions'>
Change the provided string to a string with single quotes at the beginning and end and no escape characters.
Right now, the <code>&#60;a&#62;</code> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Remove all the <code>backslashes</code> (<code>\</code>)
    testString: input => !/\\/g.test(input)
    type: input
  - text: You should have two single quotes <code>&#39;</code> and four double quotes <code>&quot;</code>
    testString: input => input.match(/"/g).length === 4 && input.match(/'/g).length === 2
    type: input
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
my_str = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>"

```

</div>

</section>

## Solution
<section id='solution'>


```python
my_str = '<a href="http://www.example.com" target="_blank">Link</a>'
```

</section>

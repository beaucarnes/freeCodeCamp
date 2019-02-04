---
id: 5c4b6e0b24fa62226d69622c
title: Comment Your Python Code
challengeType: 9
---

## Description
<section id='description'>
Comments are lines of code that Python will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.
A comment is designated with <code>#</code>. This will tell Python to ignore the remainder of the text on the current line:
<blockquote># This is a comment.</blockquote>
Technically, you can make a multi-line comment in python by surrounding the text with tripple backticks (<code>```</code>). However, this is not best practice. To make a multi-line comment, just add a <code>#</code> to the beginning of each line.
<strong>Best Practice</strong><br>As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code&mdash;both for others <em>and</em> for your future self.
</section>

## Instructions
<section id='instructions'>
Try creating a comment.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Create a comment with <code>#</code> that contains at least five letters."
    testString: code => code.match(/(#)...../g)
    type: input

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python

```

</div>



</section>

## Solution
<section id='solution'>


```python
# Fake Comment
```

</section>

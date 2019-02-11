---
id: 5c55e842103ae886fa3ba948
title: Escape Sequences in Strings
challengeType: 9
---

## Description
<section id='description'>
Quotes are not the only characters that can be <dfn>escaped</dfn> inside a string. There are two reasons to use escaping characters: First is to allow you to use characters you might not otherwise be able to type out, such as a backspace. Second is to allow you to represent multiple quotes in a string without Python misinterpreting what you mean. We learned this in the previous challenge.
<table class="table table-striped"><thead><tr><th>Code</th><th>Output</th></tr></thead><tbody><tr><td><code>\'</code></td><td>single quote</td></tr><tr><td><code>\"</code></td><td>double quote</td></tr><tr><td><code>\\</code></td><td>backslash</td></tr><tr><td><code>\n</code></td><td>newline</td></tr><tr><td><code>\r</code></td><td>carriage return</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\b</code></td><td>backspace</td></tr><tr><td><code>\f</code></td><td>form feed</td></tr></tbody></table>
<em>Note that the backslash itself must be escaped in order to display as a backslash.</em>
</section>

## Instructions
<section id='instructions'>
Assign the following three lines of text into the single variable <code>my_str</code> using escape sequences.
<blockquote>FirstLine<br/>&nbsp;&nbsp;&nbsp;&nbsp;\SecondLine<br/>ThirdLine</blockquote>
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Here is the text with the escape sequences written out.
<q>FirstLine<code>newline</code><code>tab</code><code>backslash</code>SecondLine<code>newline</code>ThirdLine</q>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>my_str</code> should not contain any spaces
    testString: " " not in my_str
    type: code
  - text: <code>my_str</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)
    testString: "FirstLine" in my_str && "SecondLine" in my_str && "FirstLine" in my_str
    type: code
  - text: <code>FirstLine</code> should be followed by the newline character <code>\n</code>
    testString: "FirstLine\n" in my_str
    type: code
  - text: <code>my_str</code> should contain a tab character <code>\t</code> which follows a newline character
    testString: "\n\t" in my_str
    type: code
  - text: <code>SecondLine</code> should be preceded by the backslash character <code>\\</code>
    testString: "\SecondLine" in my_str
    type: code
  - text: There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>
    testString: "SecondLine\nThirdLine" in my_str
    type: code
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
my_str = "" // Change this line


```

</div>


</section>

## Solution
<section id='solution'>


```python
my_str = "FirstLine\n\t\\SecondLine\nThirdLine"
```

</section>

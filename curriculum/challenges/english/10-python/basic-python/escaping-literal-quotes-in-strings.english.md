---
id: 5c55e842103ae886fa3ba949
title: Escaping Literal Quotes in Strings
challengeType: 9
---

## Description
<section id='description'>
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: <code>"</code> or <code>'</code> inside of your string?
In Python, you can <dfn>escape</dfn> a quote from considering it as an end of string quote by placing a <dfn>backslash</dfn> (<code>\</code>) in front of the quote.
<code>sampleStr = "Alan said, \"Peter is learning Python\"."</code>
This signals to Python that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:
<code>Alan said, "Peter is learning Python".</code>
</section>

## Instructions
<section id='instructions'>
Use <dfn>backslashes</dfn> to assign a string to the <code>my_str</code> variable so that if you were to print it to the console, you would see:
<code>I am a "double quoted" string inside "double quotes".</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).
    testString: input => input.match(/\\"/g).length === 4 && input.match(/[^\\]"/g).length === 2
    type: input
  - text: 'Variable my_str should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>'
    testString: my_str == "I am a \"double quoted\" string inside \"double quotes\"."
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
my_str = "" # Change this line


```

</div>

</section>

## Solution
<section id='solution'>


```python
my_str = "I am a \"double quoted\" string inside \"double quotes\"."
```

</section>

---
id: 5c55e842103ae886fa3ba96b
title: Understanding Case Sensitivity in Variables
challengeType: 9
---

## Description
<section id='description'>
In Python all variables and function names are case sensitive. This means that capitalization matters.
<code>MYVAR</code> is not the same as <code>MyVar</code> nor <code>myvar</code>. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you <em>do not</em> use this language feature.
<h4>Best Practice</h4>
<dfn>The Style Guide for Python Code</dfn>, also known as PEP 8, contains Naming Conventions that list suggested standards for names of different object types. This style guide recommends to use <dfn>Snake Case</dfn> for varialbe names and function names.
In <dfn>Snake Case</dfn>, words are separated by underscores
<strong>Examples:</strong>
<blockquote>some_variable<br>another_variable_name<br>this_variable_name_is_so_long</blockquote>
</section>

## Instructions
<section id='instructions'>
Modify the existing varialbe assignments so their names use <dfn>Snake Case</dfn>.<br>Do not create any new variables.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studly_cap_var</code> is defined and has a value of <code>10</code>
    testString: studly_cap_var == 10
    type: code
  - text: <code>proper_snake_case</code> is defined and has a value of <code>"A String"</code>
    testString: proper_snake_case == "A String"
    type: code
  - text: <code>title_case_over</code> is defined and has a value of <code>9000</code>
    testString: title_case_over == 9000
    type: code
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
STUDLYCAPVAR = 10
PRoperCAmelCAse = "A String"
tITLEcASEoVER = 9000
```

</div>



</section>

## Solution
<section id='solution'>


```python
studly_cap_var = 10;
proper_snake_case = "A String";
title_case_over = 9000;
```

</section>

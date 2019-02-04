---
id: 5c55e842103ae886fa3ba95c
title: Local Scope and Functions
challengeType: 9
---

## Description
<section id='description'>
Variables which are declared within a function, as well as the function parameters have <dfn>local</dfn> scope. That means, they are only visible within that function.
Here is a function <code>myTest</code> with a local variable called <code>loc</code>.
<blockquote>function myTest() {<br>&nbsp;&nbsp;var loc = "foo";<br>&nbsp;&nbsp;console.log(loc);<br>}<br>myTest(); // logs "foo"<br>console.log(loc); // loc is not defined</blockquote>
<code>loc</code> is not defined outside of the function.
</section>

## Instructions
<section id='instructions'>
Declare a local variable <code>my_var</code> inside <code>myLocalScope</code>. Run the tests and then follow the instructions commented out in the editor.
<strong>Hint</strong><br>Refreshing the page may help if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No global <code>my_var</code> variable
    testString: assert(typeof my_var === 'undefined', 'No global <code>my_var</code> variable');
  - text: Add a local <code>my_var</code> variable
    testString: assert(/var\s+my_var/.test(code), 'Add a local <code>my_var</code> variable');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(my_var);
}
myLocalScope();

// Run and check the console
// my_var is not defined outside of myLocalScope
console.log(my_var);

// Now remove the console log line to pass the test

```

</div>

### Before Test
<div id='js-setup'>

```python
var logOutput = "";
var originalConsole = console
function capture() {
  var nativeLog = console.log;
  console.log = function (message) {
    logOutput = message;
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
}

function uncapture() {
  console.log = originalConsole.log;
}

```

</div>

### After Test
<div id='js-teardown'>

```python
typeof myLocalScope === 'function' && (capture(), myLocalScope(), uncapture());
(function() { return logOutput || "console.log never called"; })();
```

</div>

</section>

## Solution
<section id='solution'>


```python
function myLocalScope() {
  'use strict';

  var my_var;
  console.log(my_var);
}
myLocalScope();
```

</section>

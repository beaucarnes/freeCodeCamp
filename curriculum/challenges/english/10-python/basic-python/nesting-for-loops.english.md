---
id: 5c55e842103ae886fa3ba958
title: Nesting For Loops
challengeType: 9
---

## Description
<section id='description'>
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
<blockquote>arr = [<br>&nbsp;&nbsp;[1,2], [3,4], [5,6]<br>]<br>for i in arr:<br>&nbsp;&nbsp;for j in i:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(j)</blockquote>
This outputs each sub-element in <code>arr</code> one at a time. Note that the first <code>for</code> loop returns the sub-array in the variable <code>i</code>. <code>j</code> is the contents of the sub-arrays.
</section>

## Instructions
<section id='instructions'>
Modify function <code>multiplyAll</code> so that it multiplies the <code>product</code> variable by each number in the sub-arrays of <code>arr</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>
    testString: multiplyAll([[1],[2],[3]]) === 6
    type: code
  - text: <code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>
    testString: multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040
    type: code
  - text: <code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> should return <code>54</code>
    testString: multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
def multiplyAll(arr):
  product = 1
  # Only change code below this line

  # Only change code above this line
  return product

# Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]])

```

</div>

</section>

## Solution
<section id='solution'>

```python
def multiplyAll(arr):
  product = 1
  for i in arr:
    for j in i:
      product *= j

  return product


multiplyAll([[1,2],[3,4],[5,6,7]])
```

</section>

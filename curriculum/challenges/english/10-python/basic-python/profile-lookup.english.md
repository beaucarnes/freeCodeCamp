---
id: 5c55e842103ae886fa3ba95b
title: Profile Lookup
challengeType: 9
---

## Description
<section id='description'>
We have an array of objects representing different people in our contacts lists.
A <code>lookUpProfile</code> function that takes <code>name</code> and a property (<code>prop</code>) as arguments has been pre-written for you.
The function should check if <code>name</code> is an actual contact's <code>first_name</code> and the given property (<code>prop</code>) is a property of that contact.
If both are true, then return the "value" of that property.
If <code>name</code> does not correspond to any contacts then return <code>"No such contact"</code>
If <code>prop</code> does not correspond to any valid properties of a contact found to match <code>name</code> then return <code>"No such property"</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Kristian", "last_name"</code> should return <code>"Vos"</code>
    testString: assert(lookUpProfile('Kristian','last_name') === "Vos", '<code>"Kristian", "last_name"</code> should return <code>"Vos"</code>');
  - text: <code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>
    testString: assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"], '<code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>');
  - text: <code>"Harry","likes"</code> should return an array
    testString: assert(typeof lookUpProfile("Harry", "likes") === "object", '<code>"Harry","likes"</code> should return an array');
  - text: <code>"Bob", "number"</code> should return "No such contact"
    testString: assert(lookUpProfile("Bob", "number") === "No such contact", '<code>"Bob", "number"</code> should return "No such contact"');
  - text: <code>"Bob", "potato"</code> should return "No such contact"
    testString: assert(lookUpProfile("Bob", "potato") === "No such contact", '<code>"Bob", "potato"</code> should return "No such contact"');
  - text: <code>"Akira", "address"</code> should return "No such property"
    testString: assert(lookUpProfile("Akira", "address") === "No such property", '<code>"Akira", "address"</code> should return "No such property"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
//Setup
var contacts = [
    {
        "first_name": "Akira",
        "last_name": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "first_name": "Harry",
        "last_name": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "first_name": "Sherlock",
        "last_name": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "first_name": "Kristian",
        "last_name": "Vos",
        "number": "unknown",
        "likes": ["Python", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
```

</div>



</section>

## Solution
<section id='solution'>


```python
var contacts = [
    {
        "first_name": "Akira",
        "last_name": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "first_name": "Harry",
        "last_name": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "first_name": "Sherlock",
        "last_name": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "first_name": "Kristian",
        "last_name": "Vos",
        "number": "unknown",
        "likes": ["Python", "Gaming", "Foxes"]
    },
];


//Write your function in between these comments
function lookUpProfile(name, prop){
    for(var i in contacts){
      if(contacts[i].first_name === name) {
        return contacts[i][prop] || "No such property";
      }
    }
   return "No such contact";
}
//Write your function in between these comments

lookUpProfile("Akira", "likes");
```

</section>

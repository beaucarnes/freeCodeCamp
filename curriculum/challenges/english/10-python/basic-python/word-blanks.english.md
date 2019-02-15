---
id: 5c55e842103ae886fa3ba97a
title: Word Blanks
challengeType: 9
---

## Description
<section id='description'>
We will now use our knowledge of strings to build a "<a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Libs</a>" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.
In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.
Consider this sentence - "It was really <strong>____</strong>, and we <strong>____</strong> ourselves <strong>____</strong>". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:
<blockquote>sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly."</blockquote>
</section>

## Instructions
<section id='instructions'>
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
You will need to use the string concatenation operator <code>+</code> to build a new string, using the provided variables: <code>my_noun</code>, <code>my_adjective</code>, <code>my_verb</code>, and <code>my_adverb</code>. You will then assign the formed string to the <code>result</code> variable.
You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>word_blanks("","","","")</code> should return a string.
    testString: type(word_blanks("","","","")) is str
    type: code
  - text: <code>word_blanks("dog", "big", "ran", "quickly")</code> should contain all of the passed in words separated by spaces (and any additional words in your madlib).
    testString: test = word_blanks("dog", "big", "ran", "quickly"); " dog " in test && " big " in test && " ran " in test && " quickly " in test
    type: code
  - text: <code>word_blanks("cat", "little", "hit", "slowly")</code> should contain all of the passed in words separated by spaces (and any additional words in your madlib).
    testString: test = word_blanks("cat", "little", "hit", "slowly"); " cat " in test && " little " in test && " hit " in test && " quickly " in test
    type: code

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='py-seed'>

```python
def word_blanks(my_noun, my_adjective, my_verb, my_adverb):
  # Your code below this line
  result = ""

  # Your code above this line
  return result


# Change the words here to test your function
print(word_blanks("dog", "big", "ran", "quickly"))
```

</div>

</section>

## Solution
<section id='solution'>


```python
def word_blanks(my_noun, my_adjective, my_verb, my_adverb):
  result = ""

  result = "Once there was a " + my_noun + " which was very " + my_adjective + ". "
  result += "It " + my_verb + " " + my_adverb + " around the yard."

  return result
```

</section>

---
slug: github-copilot-review
title: Github Co-Pilot Review
authors: [daim]
tags: [github, co-pilot, ai]
---

### Introduction ☕

If you've been living under a rock and don't know what **Github's co-pilot** is, it's simply an in-editor extension that makes suggestions to you as you code, attempting to finish your lines or even suggesting entire blocks of code. It's an intriguing concept, but it obviously raises a slew of issues, especially given that it was trained using GitHub data. Github co-pilot is the _Godzilla_ of autocomplete. It's state-of-the-art ai technology.

For example, instead of searching stack overflow for a good API and manually writing out the function like a caveman. You can simply add some comments about what you're looking for. The artificial paired programmer will do all the work for you. It will write out a clear clean function that looks way better than any code you’ve ever written.

It is also not confined to a particular language or framework, allowing you to deal with everything from python to javascript typescript, and yes, even ruby or go.

---

### What wizardry spells were used to train Co-Pilot? 🧙

> **GitHub Copilot** is powered by OpenAI Codex, a new AI system created by OpenAI. It has been trained on a selection of English language and source code from publicly available sources, including code in public repositories on GitHub.
> [Source](https://copilot.github.com/)

![alt text](https://partee.io/images/posts/copilot/03-gpt3-training-step-back-prop.gif)

**Working Steps**

1. Give the model an English assignment, such as _"write the power function.”_
2. Copilot attempts to complete the problem after reading a large amount of code.
3. The difference between what Copilot provided and the intended result is computed.
4. This mistake is then sent to Copilot so that it may be corrected (i.e. learn).

To recap, Copilot employs Codex, an NLP model trained on open source code. Copilot's goal is to generate proper code in response to an English language prompt stating the problem to be solved. Copilot is capable of doing so since Codex has been educated on significant quantities of open source code in a variety of languages.

---

:::info
Check out full article on **Dev To** [Link](https://dev.to/i_am_daim/github-copilot-review-after-8-months-of-usage-2kaj).
:::

### Doesn't Intellisense ring a bell? 🔔

> **Things I encountered only**

Some of the factors that make copilot so strong are, first and foremost, its ability to take in context more than any other ai. It allows synthesizing code in ways we've never seen before, as opposed to IntelliSense's short term memory, which fades after one or two lines of code. Copilot may extrapolate from existing code in a file and use well-defined variables, classes, and structures.

For example, if I wanted to build a function in typescript to validate a string, copilot will utilize the variables I've previously typed to fill up the rest of the function. While this appears to be a really strong tool, the copilot can accomplish a lot more grunt work that we hadn't even considered previously, such as having automated autofill capabilities for manual labor chores with patterns and recurring structures.

The tool comes really handy while working with JSON files. If you're writing a lengthy JSON file and need to fill out different sorts of languages, for example, copilot can literally comprehend the context of what you're trying to do and finish the work for you. This means it understands that you're attempting to iterate over multiple languages in a JSON format.

---

### We all love action. Let’s Test the Co-pilot. 🤖

Let's get started with some very fascinating things it can do. For our first example, I'm going to ask Copilot to perform a few things via comments.

Let’s start with the easy stuff. I first asked GitHub copilot to generate a react component. Here, it did a decent job except for the fact it was imported in a different fashion.

![React Component Using Copilot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ki823sbme01pmogxkrki.gif)

The component looks different, and the actual syntax of the component is specified dependent on how you write the comment, which is extremely amazing. This is why it's critical to be specific about what you want because **the copilot will produce a result based on the context of what you've written previously and presently.**

Let’s change the language and increase the difficulty. I asked the copilot to import openCV and capture the video frames. One thing is for sure, copilot works the best if it's under your leash. It does not have a mind of its own. Here, it did a good job and was pretty commendable. It even wrote comments for the specific line’s purpose.

![OpenCv](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6sb7i9zt1ogivetrdz5z.gif)

Next, let’s ask the copilot to fetch the browser version and also to get the dimensions of the screen size. Here, it did an okayish job. I just feel copilot has a habit of adding a lot of boilerplates. At least the task was achieved.

![Browser Version](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pr7wwcs81p5i49pnnqjf.gif)

---

### **My opinion after using Copilot for 8 months. 💖**

In the development community, people always crave things to bump their productivity. Hence in the pursuit, we all use a lot of tools. I believe the same thing will be true with things like GitHub co-pilot, where you can be considerably more productive. When you're more productive, there's more motivation for someone to hire you, so it's not that we'll have fewer job vacancies; rather, we'll have more job opportunities. Even if you perform remedial work as a coder, this will make you more productive and useful.

Also, at least for me, copilot has taught me things about libraries and technologies that I hadn't had the chance to really look into using, and I just kind of started writing code and said hey, I want to do this thing with that library and it just kind of guided me along the way to teach me how to use that library and I found that to be really really cool.

There have also been occasions when I wanted to check whether co-pilot could do something that I was acquainted with and it ended up doing it in a new manner that I had never really thought about or even utilizing a method that I didn't even know existed, so it's taught me something and I think that's really interesting.

I think it's a really well-integrated thing and the technology and the actual accuracy of what it's actually producing. I find it to be far more useful than not like I said it does sometimes produce silly things but for the most part, it is very helpful very quick. Again I tend to find it most useful in the more remedial task-type stuff that I need to do while I'm programming and I think that's great.

For the time being, I absolutely enjoy it. I hope the future is not gloomy. In conclusion, that is how I see things going.

Thank you for taking the time to read my post. I hope you enjoyed it. That’s all I wanted to share with you. Have a great day!

---

## **Till then Au revoir, frérot**

Find me here 🤩

[Twitter](https://twitter.com/i_am_daim)

[Website](https://daimk1.web.app/)

[Github](https://github.com/Daim-Nickel-Penny)

:::info
Check out full article on **Dev To** [Link](https://dev.to/i_am_daim/github-copilot-review-after-8-months-of-usage-2kaj).
:::

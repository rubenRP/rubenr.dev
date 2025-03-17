---
title: "GitHub Copilot: Analysis and reflections after 1 month of use"
date: 2021-09-20T00:00:00+00:00
published: true
hero_title: GitHub Copilot
hero_subtitle: Analysis and reflections after 1 month of use
description: Analysis and reflections after 1 month of use.
hero_image: /img/content/github-copilot-hero.jpg
thumbnail: /img/content/github-copilot-thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - GitHub
    - Open Source
    - Tools
    - JavaScript
---

> You can read this article also in [Spanish](/es/github-copilot).

At the beginning of July, [GitHub presented](https://www.fastcompany.com/90653878/github-copilot-microsoft-openai-coding-tool-backlash) in private beta what in my opinion is one of the most interesting technologies of the year: GitHub Copilot, an AI-assisted autocompletion tool that has generated headlines and opinions across the board.

While it is still in Public Beta and neither AI development nor training is complete, I have had access to both the tool and the repository and have been using it for over a month with Angular, Vue.js, and GatsbyJS (React). These are my reflections about this new tool and the conclusions that I have drawn. But before I state my opinion, here is a brief summary of what GitHub Copilot is.

## What is GitHub Copilot?

GitHub Copilot is a system based on Artificial Intelligence, which helps, through suggestions, to complete the code that is normally developed in a code editor. The use of AI is one of the differentiating factors with respect to other classic autocompletion technologies such as Emmet or the autocomplete of VS Code or WebStorm, since it not only helps you to complete the word. It taps into context to solve entire lines or even functions. For this, GitHub makes use of Codex, the new OpenAI AI system specific to train the Copilot service.

![GitHub Copilot Architecture](/img/content/github-copilot-github-arch.png)

This idea is neither the first nor the only one for autocompletion in code editors. There are other similar alternatives such as Tabnine that I have not been able to test, but I do believe that it is the first one that starts from Open Source, it is under the umbrella of a mega-company such as GitHub + Microsoft and it does not have (apparently) an economic objective per se same.

## How is working with GitHub Copilot?

Once the invitation is received, it is only necessary to install the GitHub Copilot extension and log in. After this, the extension connects to the Copilot system and the code hints begin to appear.

- You start writing code
- The code you write provides a context to Copilot. Comments improve context, so writing a comment explaining what is intended helps.
- Copilot and its AI provide us with suggestions based on the existing code on GitHub, although it is not the "exact" code from GitHub. It is code "based" on existing code on GitHub (it is an important detail)
- An ideal suggestion appears, although alternatives are also provided. Clicking on _tab_ fixes the code with the suggestion.

![Copilot example](/img/content/github-copilot-copilot-example.gif)

Working with Copilot is not much different than doing it with IntelliSense, since I already have the dynamics of waiting for the recommendation to appear in many cases, but Copilot is infinitely more complete.

The processes in which I found it most useful are the following:

- **Repetitive code sequences**, such as the declaration of the elements of an object, calls to interfaces, initialization of files with template, initialization of functions, etc ...
- **Regular expressions**, since I'm not very good at memorizing the format of this type of regular expression. With GItHub Copilot it is easily solved with a comment stating what you want the regular expression to do.
- **Map/Reduce functions**. As with regular expressions, it is a bit difficult for me and with Copilot it is very easy to shape it. With simple functions the precision it has is surprising, with complex functions you need to manipulate the content of the function but the code it produces is already useful and makes my work much easier.
- **Calls to APIS and creation of services**. Writing speeds up a lot since it creates the template for you and you just have to fill in what you need "by TAB"

In any case, and regardless of your abilities or the things you remember, it speeds up development a lot, since it completes code with quick functions that forget the format. It's also useful with newly added JS methods, avoiding exiting the editor and searching Stack Overflow, for example.

In the type of files where it is more useless but more surprising is in MD files. Copilot is able to obtain the context of the document, especially if it is documentation, attending to the headlines. The paragraphs that it offers as a suggestion are usually crazy in some cases since it has nothing to do with what it is intended to tell, but in some cases where it is intended to explain something generic or with preambles it offers suggestions with a lot of sense, which is a bit scary.

## Not for all areas

As I have mentioned, Copilot has been and is being trained using Open Source repositories, but part of the recommendation process consists of sending the context to Copilot so that the recommendations generated are optimal. In turn, the corrections made on the recommendations are also sent to Copilot to improve the system. This may have certain limitations for business uses or for projects where security is a mainstay. In the future, there may be a situation in which companies may be forced to limit its use since they do not want to train the AI with proprietary code.

## A new era of programming languages

From my point of view, this type of technology opens the door to a new era of higher-level programming languages, more verbose, more usable by less technical profiles and that will bring programming closer to all types of audiences, since by using AI can convert natural language into more formal code

## Last conclusions

GitHub Copilot is a great development tool, it's fast, its hit rate is very high, and it's much more than an autocomplete system. It helps me above all to focus on the code editor and not search the internet for those methods that I am not able to memorize or to complete repetitive lines such as attribute settings and that kind of thing. In these types of areas it behaves phenomenally. At the same time, it is a good learning tool, since the suggestions open the door to methods, structures or formats in which one has no experience, so it is of double benefit.

## References

<https://copilot.github.com>

<https://www.fastcompany.com/90653878/github-copilot-microsoft-openai-coding-tool-backlash>

<https://www.theregister.com/2021/09/02/github_copilot_banned_words_cracked/>

<span>Photo by <a href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Synkevych</a> on <a href="https://unsplash.com/s/photos/github?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</span>

---
title: "Writing things down is not enough: On the importance of organized and high-quality documentation."
date: 2023-03-06T00:00:00+00:00
published: true
hero_title: Writing things down is not enough
hero_subtitle: On the importance of organized and high-quality documentation..
description: In this post, we will talk about the importance of having good documentation and why maintaining technical documentation in a structured way is crucial.
hero_image: /img/content/documentation-tips-hero.jpg
thumbnail: /img/content/documentation-tips-thumb.jpg
taxonomy:
  category:
    - Articles
  tag:
    - Development
    - Documentation
slug: documentation-tips
---

> You can read this article also in [Spanish](/es/documentacion-tips).

Currently, large (and not so large) technology companies represent the forefront of innovation and technological advances. However, this fast pace of development has a challenge that is not easy to solve and that many companies do not realize in time: documentation. In this post, we will talk about the importance of having good documentation and why maintaining technical documentation in a structured way is crucial.

Everyone is used to both reading and writing documentation. The advantages of having a project documented are well known:

- It gives autonomy to developers and increases their performance.
- It serves as an entry point for software or projects for new members, smoothing the learning curve.
- It facilitates the transfer of knowledge among team members.
- It serves as a reference for end-users to understand the functioning of the software, its configuration, its current state, and its possible improvements.

However, it is also common to see examples where documentation exists but is difficult to find; once found (after searching and asking several people from different teams), it is outdated or refers to documents that no longer exist or are located elsewhere (or on a different platform, possibly with differentiated access).

Indeed, if it is an isolated case, documentation can be modified or linked correctly, but what if it is the usual functioning?

Of course, this has a strong impact on both the team and the company's functioning, increasing the time invested in navigating the company's structures, generating frustration, and as a consequence, the lack of knowledge can be reflected in the quality of the code. In turn, this is not an exclusive case in the professional field; it can also occur in an [Open Source project](https://ieeexplore.ieee.org/document/9978174).

## Documenting by itself is not enough

Of course, documenting what a project or organization does and how it does it is vital. But it is also as important to keep it organized so that the team can do their job. Therefore, for documentation to be useful, it is necessary for this documentation to be:

- **Centralized**: All documentation must be found in a single place. There may also be situations where several documentation tools are used depending on the type of profile of the company that uses it. In that case, the starting point must also be unique and, depending on each case, derive in the tool that is needed.
- **Accessible**: The documentation must be designed to be searched, so it must answer the questions that users ask, both in a search and in its content.
- **Updated**: The information must be updated. In turn, mechanisms must be implemented in the project so that updating documentation is part of the usual workflow.

## There are different ways of documentation

Usually, documentation is divided into product documentation and process documentation. Not everything is an RFC or a user manual, not everything is black or white. There may also be code snippets, or small step-by-step guides for specific procedures. Perhaps a small table with information that may be very relevant if it is **organized and contextualized**. Even diagrams or navigation menus that can direct to one place or another within the documentation itself, are also part of the documentation. Fortunately, documentation tools allow creating multiple document formats.

### Not everything is software, company operation documentation is important too

Even if specific tools are used for it, information on the processes that are carried out daily in the company, or related to human resources, is also a form of documentation. Therefore, they deserve to be treated in the same way and must also comply with the principles of centralization, accessibility, and updating.

## Organization and management strategies

Next, I summarize some clear and simple tips to implement as a habitual practice for managing technical documentation. As always, they are not fixed laws, and it is essential to adjust them to the project or company's functioning, but it is good to keep them in mind.

### Use of landing pages and process diagrams

A good starting point for the documentation portal or the tool used is the use of landing pages where it is clearly explained what that knowledge base contains and how to use it. It may seem silly, but when you have been working with that tool for a long time, you may forget that those who land on it for the first time may not understand it.

### Explain with examples what types of documentation are and how to create them

At the same time, it is also essential to have a document that defines the types of documents that can be found in the documentation system, for which cases they should be used, examples of them, and what to consider when writing them.

### Granularity of information

An idea for information management is to establish levels of granularity, and that the user navigates between documents, delving deeper and deeper until they reach the level of knowledge they need (from less technical to more technical, from more strategic to less strategic), as if it were a tree of knowledge.

To connect information between "horizontal" levels, within the tree of knowledge, tags can be used to relate projects, technologies involved, customers or relevant work teams.

If, within a user's navigation, they reach the "leaves" within the information tree, it may be interesting to connect it with other types of documentation tools. For example, if you have reached the end of the knowledge of a description of an API, you can link it to the link where the Swagger of that API is located.

### Consistency

Regardless of the rules or standards used for generating documentation, consistency between documents is very important since that will give solidity to the information platform and facilitate its use by users through habit, as they know what to expect from a document before seeing it. A very useful practice for maintaining consistency is the use of templates. In this way, any developer who faces the creation of a new document has a starting point with clear references to what they have to tell and how to do it.

### Documentation manager?

It may sound exaggerated, but in very large companies, it is interesting to consider the existence of a role (I don't know if there is something similar, I haven't seen references) that is responsible for controlling the use and form of documentation, whether the established rules and standards are met, and keeping it updated to make it useful for everyone.

## Tools

At this point, there may be a question about which specific tool to use or which one is better to maintain documentation using the previously described tips. The answer is simple: any can serve. It is more important to organize and manage the documentation itself than the tool. There are specific tools such as Confluence, Read the Docs, Scribe, or Gitlab and Github wikis, and generic applications such as Notion. Any can serve if managed correctly. You can even create an internal and specific documentation tool with Gatsby or Nuxt.

## References

[How 5 Companies Use Internal Documentation To Scale More Efficiently - Tettra](https://tettra.com/article/internal-documentation/)

[Approaches for Documentation in Continuous Software Development](https://csimq-journals.rtu.lv/article/view/csimq.2022-32.01/3016)

[What Is Software Documentation? Types, Benefits & Best Practices](https://www.proprofskb.com/blog/software-documentation-types-and-best-practices/)

[Why Software Documentation Matters: The Tools You Need | Iterators](https://www.iteratorshq.com/blog/why-software-documentation-matters-the-tools-you-need/)

[The importance of software documentation tools](https://www.linkedin.com/pulse/importance-software-documentation-tools-ekaterina-novoseltseva/)

[Agility and system documentation in large-scale enterprise system projects: a knowledge management perspective](https://www.sciencedirect.com/science/article/pii/S1877050921002234?via=ihub)

[How to facilitate inter-organizational knowledge sharing: The impact of trust](https://www.sciencedirect.com/science/article/pii/S0378720614000408)

Photo by [Annie Spratt](https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/5cFwQ-WMcJU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

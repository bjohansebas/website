---
title: "January 2026 Summary"
date: "January 29, 2026"
description: "Monthly update on open-source contributions: iconv-lite releases, key changes in Express and on-finished, performance improvements, Webpack work, and progress in tooling, security, and documentation."
---

Hi 👋

I wanted to share a summary of what I’ve been working on in open source over the past month. It’s been an intense, very productive, and quite exciting month.

Between releases, work on Express and Webpack, performance improvements, security, and new major versions on the way, a lot has happened that’s worth sharing.

## 📦 New releases

This month started with several important releases:

- [iconv-lite@0.7.2](https://github.com/pillarjs/iconv-lite/releases/tag/v0.7.2):

  This version fixed an issue with TypeScript. The type definitions now work correctly, so you can use the package without issues in TypeScript projects.

- [iconv-lite@alpha.1](https://github.com/pillarjs/iconv-lite/releases/tag/v1.0.0-alpha.1):

  This release includes a large part of the work done by [Alexander Shtuchkin](https://github.com/ashtuchkin) and introduces the idea of having backers for different buffer implementations. It also now uses `TextDecoder`, which significantly improves support across browsers, Node.js, and other runtimes.

## 🚀 Upcoming changes in Express and its ecosystem

### New major version of `on-finished`

A new major version of `on-finished` is almost ready.
This version modernizes the code by using Node.js’ native `finished` implementation and adds official support for HTTP/2 (see [on-finished#87](https://github.com/jshttp/on-finished/pull/87)).

Once it’s released and adopted by the packages that depend on it, it will be possible to unlock features in Express or other frameworks that depend on it, which previously couldn’t be used.

One example is `optimizeEmptyRequests`, a Node.js option for [createServer](https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener), which until now was largely blocked by `on-finished`.

### Performance improvement in `res.send()`

In the next version of Express, there will also be a small performance improvement when sending just a string with `res.send()`.

Previously, there was double processing to set the `Content-Type`; now this will only happen once, as long as the `Content-Type` has not already been defined. You can find more details in PR [express#6991](https://github.com/expressjs/express/pull/6991).

## 🎨 Redesign of the Express website

After months of discussions and a lot of behind-the-scenes work, the redesign of the Express website has officially begun.

I’m leading this effort with the goal of modernizing the experience, improving documentation clarity and navigation, and making the site better reflect the current and future state of the project.

We’re also getting help from [Orama](https://orama.com/?utm_source=bjohansebas.me), which is directly collaborating on the website redesign in support of the Express project.

That said, we still need community participation: ideas, reviews, feedback, and proposals are key to making this redesign truly represent the people who use and maintain Express.

This is an open and collaborative effort, and any kind of help is welcome:

- Reviews of designs and visual proposals.
- Ideas around structure, content, or user experience.
- General feedback, even if it’s not technical.

If you’re interested in participating or giving feedback, you’re welcome to join the [OpenJS Foundation Slack](https://slack-invite.openjsf.org/), in the `#express-website` channel, where we’re coordinating the work and discussing ideas.

## 🛠️ Codemods and tooling

I’m happy to announce that the official Express codemods are now available on the [codemod.com](https://codemod.com?utm_source=bjohansebas.me) platform.

This makes it easier to create and distribute codemods, allows anyone to run them easily, and avoids the need for the Express team to maintain a CLI compatible with all environments.

## 🔐 Security and Webpack

I also joined the Webpack security triage team, where I’ll help review and manage security reports coming into the project, contributing to keeping the Webpack ecosystem secure.

Along with this, there are new and interesting things coming that I hope to be able to share soon 👀

## 🔧 Work in progress

- I’m collaborating with the Webpack team on a new major version of `webpack-dev-server`, which will incorporate `Express v5`.

  This will allow the project to stay up to date and take advantage of the improvements that come with Express v5.

- In addition, new versions of `express-session` and `serve-index` were released, including several improvements and bug fixes.

If you’d like to support me directly, you can do so through [GitHub Sponsors](https://github.com/sponsors/bjohansebas).

I’m also currently looking for sponsorship to be able to purchase a new laptop that will allow me to continue contributing sustainably to open source. You can read the full context and details in this [post](/en/blog/sponsor-my-laptop).

Thanks for reading and for supporting this journey in any way 🙏

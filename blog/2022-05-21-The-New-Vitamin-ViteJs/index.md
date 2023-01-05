---
slug: vitejs
title: The New Viteamin:ViteJs
authors: [daim]
tags: [web, vitejs]
---

## Vite / Yeet / Wheet? _Viteamin [sic.]_

**Vite**, pronounced `/vit/`, like "veet". Vite is a French term that means rapidly or quickly. **Evan Yu**, the inventor of Vue.js, designed vite. The next generation of front-end tools is vite, which offers immediate server start and lightning-fast hot module replacement. It also provides optimized builds with full feature support utilizing rollup universal plugin APIs that are entirely typed. The server-side rendering is yet experimental.

![Daim's Blog On ViteJs](https://res.cloudinary.com/practicaldev/image/fetch/s--cB6KZs31--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e39hcxy1wlqdf20nywk3.png)

## Main Purpose

Front-end web apps are at the heart of vite, a javascript development tool that simplifies the way we build and develop them. It provides two functions.

1. The first is to serve your code when developing locally.
2. Bundle your javascript, CSS, and other assets for production.

## Templates Offered

No, this is not a view-only tool. It offers templates (starting files) for a variety of frameworks and vanilla JavaScript, as well as TypeScript, JSX, and Sass support (although you need to install one dependency for Sass).

We get to pick a project name and a template after executing-

```jsx
npm init @vitejs/app
```

At the time of writing, the templates offered were are as follows:

- `vanilla`
- `vue`
- `vue-ts`
- `react`
- `react-ts`
- `preact`
- `preact-ts`
- `lit-element`
- `lit-element-ts`
- `svelte`
- `svelte-ts`

:::info
Check out full article on **Dev To** [Link](https://dev.to/i_am_daim/the-new-viteamin-vitejs--3ekg).
:::

## Wait! Why CRA is slow?

![Bundled based dev server](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96u25ximvvf1f8kl4u75.png)

When it comes to building a React app, many developers of different skill levels have long relied on Create React App (CRA). I was also using CRA for a long time. However, I noticed it has some substantial shortcomings in terms of speed and performance. CRA can be a little sluggish when starting a project. Things get even sour while building a development server which ends up taking about 5-10 minutes.
The reason for the slow behavior is that CRA bundles the code with Webpack. Because Webpack bundles the entire code, if your codebase is more than 10k lines long, you may notice a slower start on the dev environment and a significant wait time to view the changes made. Even with Hot reloading enabled in some frameworks, update speed suffers significantly when more code and dependencies are added to the program.

## What magic does Vite do?

Vite has chosen a different approach to this, almost in reverse. Vite launches the server immediately and uses esbuild to pre-bundle dependencies that don't change frequently. This makes vite 10 times or at times 100 times faster. This is because it helps improve page speed and convert CommonJS / UMD modules to ESM.

![Native ESM based dev server](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9x2g3084dczrz7k3pml8.png)

The application modules are divided into 2 parts -

1. **Dependencies**

   The majority of dependencies are ordinary JavaScript that does not change much throughout development. Some huge dependencies (for example, AntD) are likewise rather costly to handle.

2. **Source Code**

   Source code frequently contains non-plain JavaScript that must be transformed (e.g., JSX, CSS, or other components) and will be modified frequently. Furthermore, not all source code must be loaded at the same time (e.g. with route-based code-splitting).

## Bien joué Vite - Performance CRA vs Vite!

![Diskspace comparison for CRA vs vite](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6cj8x1su2kptfouh0cod.jpg)

## Conclusion

Vite effectively relieves us of that task, and Vite has a community at its disposal to investigate concerns. This implies we may put our confidence in our tools. Vite effectively relieves us of that task, and Vite has a community at its disposal to investigate concerns. This implies we may put our confidence in our tools.

Thank you for taking the time to read my post. I hope you enjoyed it. That’s all I wanted to share with you. Have a great day!

## **Till then Au revoir, frérot**

Find me here 🤩

[Twitter](https://twitter.com/i_am_daim)

[Website](https://daimk1.web.app/)

[Github](https://github.com/Daim-Nickel-Penny)

:::info
Check out full article on **Dev To** [Link](https://dev.to/i_am_daim/the-new-viteamin-vitejs--3ekg).
:::

export const articles = [
    {
        id: "1",
        content: `
            <p><img alt="Post image" src="https://refine-web.imgix.net/blog/2022-09-12-next-typescript/social.png?w=800" /></p>

<p>September 12, 2022&nbsp;&middot;&nbsp;8 min read</p>

<h1>A Guide for Next.js with TypeScript</h1>

<h2>Introduction<a href="https://refine.dev/blog/next-js-with-typescript/#introduction" title="Direct link to heading">​</a></h2>

<p>Next.js is an open source React framework for building single-page web applications. It comes with numerous out-of-the-box functionalities that make developing web applications faster and more interesting, thereby providing refined and elegant developer and user experiences.</p>

<p>Combining&nbsp;<strong>Next.js and TypeScript</strong>&nbsp;gives us superpowers to rapidly create applications with a good developer and user experiences. Every developer hates bugs. Especially pesky ones such as typos or trying to use or access undeclared variables.&nbsp;<strong>TypeScript</strong>&nbsp;helps catch these types of bugs early during development, and this is one of the many features that make integrating it with a tool like Next.js fantastic.</p>

<p>In this article, we&#39;ll look at how you can integrate TypeScript in your Next.js apps. We&#39;ll also explore reasons why you should consider using this tool in your Next.js projects and also talk about its benefits.</p>

<p>Steps we&#39;ll cover:</p>
        `
    },
    {
        id: "2",
        content: `
<ul>
\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#what-is-typescript" rel="noopener dofollow">What is TypeScript?</a></li>
\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#how-to-add-typescript-to-your-nextjs-app" rel="noopener dofollow">How to add TypeScript to your Next.js app</a>
\t<ul>
\t\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#create-next-app" rel="noopener dofollow"><code>create-next-app</code></a></li>
\t\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#adding-typescript-to-an-existing-project" rel="noopener dofollow">Adding TypeScript to an existing project</a></li>
\t</ul>
\t</li>
\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#how-to-use-typescript-with-nextjs-data-fetching-methods" rel="noopener dofollow">How to use Typescript with Next.js data fetching methods</a></li>
\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#how-to-use-typescript-in-nextjs-api-routes" rel="noopener dofollow">How to use Typescript in Next.js API routes</a></li>
\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson" rel="noopener dofollow">How to configure absolute imports and module path aliases in tsconfig.json</a></li>
\t<li><a href="https://refine.dev/blog/next-js-with-typescript/#disabling-typescript-errors-in-production" rel="noopener dofollow">Disabling Typescript Errors in Production</a></li>
</ul>

<h2>What is TypeScript?<a href="https://refine.dev/blog/next-js-with-typescript/#what-is-typescript" title="Direct link to heading">​</a></h2>

<p>It&#39;s a strict JavaScript superset used for large enterprise projects and writing programs that scale. In the end, TypeScript transpiles to plain JavaScript and can be used for developing applications on the client-side and server-side.</p>
        `
    },
    {
        id: "3",
        content: `
        <p>TypeScript is an object-oriented programming language that provides all JavaScript features and extra useful capabilities. These capabilities include static or dynamic type checking, error checking during compilation, type inference, and so on.</p>

<h2>How to add TypeScript to your Next.js app<a href="https://refine.dev/blog/next-js-with-typescript/#how-to-add-typescript-to-your-nextjs-app" title="Direct link to heading">​</a></h2>

<p>Next.js provides integrated support for TypeScript with built-in types for pages, API routes, the three data fetching methods, etc.</p>

<p>Basically, there are two ways in which we can add TypeScript to our project. The first is with&nbsp;<code>create-next-app</code>, and the second is by adding TypeSript manually to an existing project.</p>

<h4><code>create-next-app</code><a href="https://refine.dev/blog/next-js-with-typescript/#create-next-app" title="Direct link to heading">​</a></h4>

<p>We can bootstrap a Next.js application with TypeScript by adding a&nbsp;<code>--typescript</code>&nbsp;or&nbsp;<code>--ts</code>&nbsp;flag to the&nbsp;<code>create-next-app</code>&nbsp;command like below:</p>

<pre>
<code>npx create-next-app@latest --ts
# or
npx create-next-app@latest --typescript
</code></pre>

<p>&nbsp;</p>

<h4>Adding TypeScript to an existing project<a href="https://refine.dev/blog/next-js-with-typescript/#adding-typescript-to-an-existing-project" title="Direct link to heading">​</a></h4>

<p>Alternatively, we can also add TypeScript manually to an existing Next.js project.</p>

<p>First, you&#39;ll need to create a&nbsp;<code>tsconfig.json</code>&nbsp;file in your project root folder. This file specifies the root files and the compiler options required to compile the project and is populated automatically by Next.js with default values.</p>

<pre>
<code>touch tsconfig.json
</code></pre>

<p>&nbsp;</p>
        `
    },
    {
        id: "4",
        content: `
        
<p>Next, run&nbsp;<code>npm run dev</code>&nbsp;or&nbsp;<code>yarn dev</code>&nbsp;(if you use Yarn) to start the application development server.</p>

<p>Next.js will emit a message in the terminal with the following content and try to install the necessary TypeScript related packages:</p>

<pre>
<code>It looks like you're trying to use TypeScript but do not have the required package(s) installed.
Installing dependencies

If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).


Installing devDependencies (yarn):
- typescript
- @types/react
- @types/node

[1/4] Resolving packages...
[2/4] Fetching packages...

</code></pre>

<p>&nbsp;</p>

<p>When the installation is complete, open&nbsp;<code>tsconfig.json</code>&nbsp;and you&#39;ll see it populated with values like below:</p>

<p><img alt="tsconfig" src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-12-next-typescript/tsconfig.png" /></p>

<p>&nbsp;</p>

<p>If you noticed, Next.js also created a new file,&nbsp;<code>next-env.d.ts</code>&nbsp;in the project root. This file ensures Next.js types are picked up by the compiler and should&nbsp;<strong>not</strong>&nbsp;be edited or deleted. Also, ensure the file is added to&nbsp;<code>.gitignore</code>&nbsp;to prevent it from being committed by version control like Git.</p>

<p>With this, you can now start creating files with&nbsp;<code>.ts</code>&nbsp;and&nbsp;<code>.tsx</code>&nbsp;extensions in your application.</p>

<p><strong>Usage example</strong></p>

<pre>
<code>import React from 'react'

type ProfileProps = {
    profile: {
    firstName: string,
    lastName: string,
    age: number,
    }
}

const Profile: React.FunctionComponent&lt;ProfileProps&gt; = ({ profile }): JSX.Element =&gt; {
    return (
        &lt;&gt;
          &lt;p&gt;Profile&lt;/p&gt;
          &lt;div&gt;Welcome, {profile.firstName}&lt;/div&gt; 
        &lt;/&gt;
    )
}
        `
    },
    {
        id: "5",
        content: `
        </code></pre>

<p>&nbsp;</p>

<p>We can use&nbsp;<code>InferGetStaticPropsType</code>&nbsp;to get inferred typings for the&nbsp;<code>posts</code>&nbsp;prop. Add and refactor the code with the highlighted like below:</p>

<p>index.tsx</p>

<pre>
<code>import { InferGetStaticPropsType } from 'next'

...

function PostPage({ posts }: InferGetStaticPropsType&lt;typeof getStaticProps&gt;) {}
  
export default PostPage
</code></pre>

<p>&nbsp;</p>

<p>You can also use this same method when using&nbsp;<code>getServerSideProps</code>.</p>

<h2>How to use Typescript in Next.js API routes<a href="https://refine.dev/blog/next-js-with-typescript/#how-to-use-typescript-in-nextjs-api-routes" title="Direct link to heading">​</a></h2>

<p>Next.js also comes with built-in types for API routes. which we can access like below:</p>

<pre>
<code>import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) =&gt; {
  res.status(200).json({ age: '25' })
}
</code></pre>

<p>&nbsp;</p>

        `
    },
    {
        id: "6",
        content: `
        <p>We can also specify custom types for the response data:</p>

<pre>
<code>import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse&lt;Data&gt;) =&gt; {
  res.status(200).json({ age: '25' })
}
</code></pre>

<p>&nbsp;</p>

<h2>How to configure absolute imports and module path aliases in tsconfig.json<a href="https://refine.dev/blog/next-js-with-typescript/#how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson" title="Direct link to heading">​</a></h2>

<p>Do you relate with the pain of having to do something like this?</p>

<pre>
<code>Import { fetchUserProfile } from '../../../../utils'
Import UserProfile from '../../../UserProfile'
</code></pre>

<p>&nbsp;</p>

<p>How about if you could do something like?</p>

<pre>
<code>Import { fetchUserProfile } from '/@utils'
Import UserProfile from '@components/UserProfile'
</code></pre>

<p>&nbsp;</p>

<p>Well, to achieve this, we can configure path aliases in&nbsp;<code>tsconfig.json</code>&nbsp;so we can conveniently import modules across our application. TypeScript path aliases allow us to create aliases or shortcuts for absolute paths in the application, which we can resolve to. Next.js also automatically supports path aliases, so we don&#39;t have to do many configurations.</p>

<p>For example, if you have a file in your project importing a module with a path structure like&nbsp;<code>/components/MUIComponents/ButtonGroup/</code>, instead of trying to write an ugly code such as this:</p>

<pre>
        `
    },
    {
        id: "7",
        content: `
        import ButtonGroup from import ButtonGroup from "../../components/MUIComponents/ButtonGroup";

const User = () =&gt; {
  return (
    &lt;&gt;
      &lt;h1&gt;User Page&lt;/h1&gt;
      &lt;div&gt;
        &lt;ButtonGroup /&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
};

export default User;
</code></pre>

<p>&nbsp;</p>

<p>We can create a path alias for all files in the&nbsp;<code>MUIComponents</code>&nbsp;folder for easy access using the&nbsp;<code>baseUrl</code>&nbsp;and&nbsp;<code>path</code>&nbsp;options in&nbsp;<code>tsconfig.json</code>&nbsp;like so:</p>

<pre>
<code>...
"baseUrl": ".",
"paths": {
    "@/MUIComponents/*": ["components/MUIComponents/*"]
},
...
</code></pre>

<p>&nbsp;</p>

<p><code>baseUrl</code>&nbsp;lets us specify a root URL to use for our imports and&nbsp;<code>paths</code>&nbsp;lets us configure path aliases. You can read more about module path aliases&nbsp;<a href="https://nextjs.org/docs/advanced-features/module-path-aliases" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<p><code>baseUrl</code>&nbsp;lets us specify a root URL to use for our imports and&nbsp;<code>paths</code>&nbsp;lets us configure path aliases. You can read more about module path aliases&nbsp;<a href="https://nextjs.org/docs/advanced-features/module-path-aliases" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<p><code>baseUrl</code>&nbsp;lets us specify a root URL to use for our imports and&nbsp;<code>paths</code>&nbsp;lets us configure path aliases. You can read more about module path aliases&nbsp;<a href="https://nextjs.org/docs/advanced-features/module-path-aliases" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<p><code>baseUrl</code>&nbsp;lets us specify a root URL to use for our imports and&nbsp;<code>paths</code>&nbsp;lets us configure path aliases. You can read more about module path aliases&nbsp;<a href="https://nextjs.org/docs/advanced-features/module-path-aliases" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
<p><code>baseUrl</code>&nbsp;lets us specify a root URL to use for our imports and&nbsp;<code>paths</code>&nbsp;lets us configure path aliases. You can read more about module path aliases&nbsp;<a href="https://nextjs.org/docs/advanced-features/module-path-aliases" rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>

<p>NOTE</p>

<p>You can use a&nbsp;<code>jsconfig.json</code>&nbsp;file instead if you&#39;re not using TypeScript in your project.</p>

<p>Now we can use the alias in our application like so:</p>

<pre>
<code>import ButtonGroup from "@/MUIComponents/ButtonGroup";

const User = () =&gt; {
  return (
    &lt;&gt;
      &lt;h1&gt;User Page&lt;/h1&gt;
      &lt;div&gt;
        &lt;ButtonGroup /&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
};

        `
    }
]
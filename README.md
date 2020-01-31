# kimthompson.me (or kimthompson.github.io) 

This is my personal website, built with [Svelte](https://svelte.dev/). Hopefully I'm done rebuilding it forever now, and will move on to other projects and minor enhancements as I learn more about PWAs and animations.

Originally I built it with [Nuxt.js](https://nuxtjs.org) because I wanted to use Vue and heard it was good for building static sites. It was a good exercise, especially considering we ended up using [Next.js](https://nextjs.org) at my job at MPR, but it was way overpowered and large for what I needed.

Then I went to [Lemon's](https://ahoylemon.xyz) 2019 Minnebar talk on making the web tiny, and was inspired to remake my website using plain old HTML, CSS and JavaScript. I succeeded in this, and it was great review, but I definitely missed the effortless templating of React.

Then I watched [this talk](https://www.youtube.com/watch?v=AdNJ3fydeao) by Rich Harris, the creator of Svelte, and knew I wanted to at least try to port my site to it. Fortunately, the vanilla-to-Svelte transition took no time at all, and resulted in far less code. Everything just worked as it was supposed to. For this and the performance reasons he outlined in the talk above, I think I may be hooked!

## Running this site locally

The following instructions assume that you have a basic knowledge of yarn (or npm) and bash terminals.

Download this repository, install the dependencies with `yarn`, then run the `yarn dev` command. Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Deploying to the web with GitHub Pages

If you want to use this as a template for your own site (the styles need to be combed through for redundancies, so I'm not sure I would!), feel free to fork it into a repo named [YOUR_GITHUB_USERNAME].github.io, make the changes you need, then deploy as follows:

Enter the command `yarn build` to create your bundles in the **/public** folder. To see if your site is building as expected, run `yarn checkbuild` and visit on [localhost:8080](http://localhost:8080).

If you're satisfied with that, push up your changes to the **dev** branch and enter `yarn pub` to publish your site to [YOUR_GITHUB_USERNAME].github.io. This command simply publishes the public folder on its own as a subtree to the **master** branch, which is what becomes the website.

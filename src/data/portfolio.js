export const portfolio = [
  {
    title: "MPR News",
    category: "project",
    short_description: "We moved MPR News to our new CMS and React, giving it a mild facelift along the way",
    long_description: "We built it in 6 weeks, which really wasn't enough time. We're still patching it.",
    date: new Date("July 30, 2019"),
    thumbnail: "images/portfolio/mpr-news-2019_848x848.jpg",
    link: "http://www.mprnews.org",
    order: 0
  },
  {
    title: "CONvergence 2019",
    category: "event",
    short_description: "I'll be at CONvergence 2019 from July 4th to July 7th!",
    long_description:
      "Catch me there all three days! (no cosplay, since I was just sick)",
    date: new Date("July 4, 2019"),
    thumbnail: "",
    link: "http://www.convergence-con.org/",
    order: 1
  },
  {
    title: "APM Podcast Site Engine",
    category: "project",
    short_description:
      "The website of the podcast 'Decomposed', which was spun up with the APM Podcast site engine I helped create",
    long_description:
      "We knew we needed a way to spin up and teardown websites for new podcasts very quickly. We ended up taking the libraries we made and creating a webapp that, in and of itself, generates podcast websites based on a configuration file. I have linked to just one example here, but another site spun up with this app is Terrible, Thanks for Asking",
    date: new Date("May 2019"),
    thumbnail: "images/portfolio/podcast-engine-2019_600x600.jpg",
    link: "https://www.decomposedshow.org/",
    order: 2
  },
  {
    title: "Railsconf 2019",
    category: "event",
    short_description: "I'll be at Railsconf 2019 from April 30 to May 3!",
    long_description:
      "It's in Minneapolis, and I need to learn more Rails. Perfect.",
    date: new Date("April 30, 2019"),
    thumbnail: "",
    link: "https://railsconf.com/",
    order: 3
  },
  {
    title: "Minnebar 2019",
    category: "event",
    short_description: "I'll be at Minnebar 2019 on April 27!",
    long_description:
      "I intend to play with the robots and attend Lemon's talk on making the web smaller",
    date: new Date("April 27, 2019"),
    thumbnail: "",
    link: "https://minnestar.org/minnebar/",
    order: 4
  },
  {
    title: "APMG's NPM Libraries",
    category: "project",
    short_description:
      "This is APM Titan, our main library of React components on NPM",
    long_description:
      "After successfully building Live From Here and facing a bit of a lull in work before other projects were cleared for kickoff, we decided that a number of the React components we just created should be reused in our websites going forward. I took charge of the first draft of creating and publishing these NPM packages, and with another coworker we have them in a near-1.0 state. The libraries and code are public, but I doubt they'll be all that useful outside the organization.",
    date: new Date("March 2019"),
    thumbnail: "images/portfolio/npm-apmg-titan-2019_675x675.jpg",
    link: "https://www.npmjs.com/package/@apmg/titan",
    order: 5
  },
  {
    title: "Generating a GitHub Pages Site with Nuxt.js",
    category: "article",
    short_description:
      "Blog Post on Medium: Generating a GitHub Pages Site with Nuxt.js",
    long_description: "",
    date: new Date("February 7, 2019"),
    thumbnail: "images/portfolio/boom.gif",
    link:
      "https://medium.com/kim-thompson/github-pages-and-nuxt-js-d4ea9ad1f80c",
    order: 6
  },
  {
    title: "MPR 2018 Election Coverage",
    category: "project",
    short_description: "MPR's 2018 election dashboard",
    long_description:
      "On this project, I was primarily responsible for the charts. I updated their existing Leaflet map from 2016 to work within our new React setup and created a simple waffle chart to display the balance of power within the Minnesota Legislature. This was my first time working with D3.js in a while, and it was enlightening to read up on all the changes. In the end, however, the mathematical/color scale needs of this chart were so simple I didn't need to use D3, and I simply generated the required shapes in an SVG using React.",
    date: new Date("November 2018"),
    thumbnail: "images/portfolio/election-2018_694x694.jpg",
    link: "https://elections.mpr.org/2018-11-06",
    order: 7
  },
  {
    title: "Live From Here",
    category: "project",
    short_description: "Live From Here's website",
    long_description:
      "This was my first big project with MPR! This is where I really started to work with React components, and though I was mostly hired to work with JavaScript and Rails, we ended up needing a lot more styling done here than anticipated. My boss was super pleased to find that I happened to be very good at that sort of work too, even though it wasn't what I was hired for.",
    date: new Date("October 2018"),
    thumbnail: "images/portfolio/live-from-here-2018_675x675.jpg",
    link: "https://www.livefromhere.org/",
    order: 8
  },
  {
    title: "Classical 24",
    category: "project",
    short_description: "Classical 24's station schedule website",
    long_description:
      "My boss wanted me to get my feet wet with Rails during my first couple of weeks, so he told me to rebuild a site that hadn't been touched in a couple of decades in Rails and a frontend framework of my choice (Vue). Content rights made it so I wasn't allowed to actually add an audioplayer to this page or update the logo, but my final result was still such an improvement over the initial site (a page with like four links built with PHP 3.0) that they took it and published it and were able to shut down this old, rarely-visited liability.",
    date: new Date("September 2018"),
    thumbnail: "images/portfolio/classical-24-2018_520x520.jpg",
    link: "https://www.classical24.org/",
    order: 9
  }
];


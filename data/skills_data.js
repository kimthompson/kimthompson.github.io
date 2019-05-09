import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faVuejs,
  faWindows,
  faApple,
  faJava
} from '@fortawesome/free-brands-svg-icons'
import {
  faChartArea,
  faGlobeAmericas,
  faSubway,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import { faGem, faFolderOpen } from '@fortawesome/fontawesome-free-regular'

export const skills = [
  {
    name: 'HTML',
    level: 10,
    icon: faHtml5,
    story:
      "One of the first languages I learned back during my first internship with Slate. It is at the core of any web project, and I've learned how to use it to write the kind of layouts that help me as the developer and the user later.",
    color: '#e34f26',
    index: 0
  },
  {
    name: 'CSS',
    level: 10,
    icon: faCss3Alt,
    story:
      "A specialty of mine. Especially since flexbox and grid came out, it's been a dream to work with. Doubly so for when I'm working with SCSS and have variables and mixins at my disposal.",
    color: '#0645ad',
    index: 1
  },
  {
    name: 'JavaScript',
    level: 10,
    icon: faJs,
    story:
      "My problematic fave. It keeps getting better and better over time, and I have come to appreciate it for (in spite of?) its quirks. The best books I've read on JavaScript as a language would have to be Kyle Simpson's <a href='https://github.com/getify/You-Dont-Know-JS'><em>You don't know JS</em></a> series.",
    color: '#f7df1e',
    index: 2
  },
  {
    name: 'React',
    level: 8,
    icon: faReact,
    story:
      "This is the primary framework use in my work at MPR. I like it quite a bit, but I prefer Vue for my personal projects. Still, I've grown comfortable with it and recognize that it is in some respects more powerful. I just hate Facebook so much.",
    color: '#00d8ff',
    index: 3
  },
  {
    name: 'Vue',
    level: 8,
    icon: faVuejs,
    story:
      'My absolute favorite JavaScript framework. I love working with single-file components and all the nice little directives that Vue has to offer. I built this site with Vue and Nuxt, so you know my love is true.',
    color: '#42b883',
    index: 4
  },
  {
    name: 'C#',
    level: 7,
    icon: faWindows,
    story:
      'Learned this on the job at Design Center, Inc. We were nominally an iOS shop, but some clients wanted apps for Windows instead. I somehow became one of the main people working on those apps. I once built an app for iPad and Surface Pros using Xamarin.',
    color: '#68217a',
    index: 5
  },
  {
    name: 'Swift',
    level: 7,
    icon: faApple,
    story:
      "Learned how to develop for iOS while working at Design Center, Inc. It felt bizarre to first learn to build interfaces in code using Objective-C, then to unlearn that and use storyboards when we switched to Swift. I think my knowledge of iOS's native quirks will come in handy for React Native.",
    color: '#717175',
    index: 6
  },
  {
    name: 'D3.js',
    level: 6,
    icon: faChartArea,
    story:
      "I've done a few things with D3, creating a few basic charts and, most notably, a visualization of <a href='/kepler/index.html'>Kepler objects</a> for a graduate level course I took in college. Still, I know a ton more now about how to keep such visuals responsive, and will be taking on a side project soon.",
    color: '#e500e5',
    index: 7
  },
  {
    name: 'Leaflet',
    level: 8,
    icon: faGlobeAmericas,
    story:
      "I've had to make quite a few interactive web maps in my various media internships. Leaflet is good, but I have already run up against its limitations. I'm thinking I'll move on to D3 maps before too long.",
    color: '#0000e5',
    index: 8
  },
  {
    name: 'Ruby',
    level: 6,
    icon: faGem,
    story:
      "Learned this for my current job at MPR. Everything there runs on Rails, and I had a lot of fun running through <a href='https://exercism.io'>exercism.io</a> exercises and learning about all the little tricks and conveniences it has that JavaScript doesn't (yet).",
    color: '#cc342d',
    index: 9
  },
  {
    name: 'Rails',
    level: 5,
    icon: faSubway,
    story:
      "Learned it for my current job at MPR. Most of our sites run on Rails and React. I mostly work on the front end, so I feel like my knowledge of Rails is spotty. Still, I built <a href='https://classical24.publicradio.org'>Classical 24</a> with Ruby and Vue from scratch.",
    color: '#cc0000',
    index: 10
  },
  {
    name: 'C++',
    level: 4,
    icon: faCode,
    story:
      'Used it in school. Found it easier to use than Java, weirdly enough. My team of four made a project with it where virtual "cars" would detect "obstacles" and automatically steer to avoid them.',
    color: '#a31f34',
    index: 11
  },
  {
    name: 'Java',
    level: 2,
    icon: faJava,
    story:
      'Forced to use it in school and in my first job out of college (albeit lightly). Not a huge fan.',
    color: '#007396',
    index: 12
  },
  {
    name: 'C',
    level: 1,
    icon: faFolderOpen,
    story:
      "Ugh, let's not even go there. Low-level operating systems are apparently not my thing.",
    color: '#543729',
    index: 13
  }
]

const skills = [
  {
    name: "HTML",
    level: 10,
    icon: "fab fa-html5",
    story:
      "Writing markup that is accessible to humans and parsers is still incredibly important. I impress upon new devs the importance of writing good markup that doesn't get in the way later.",
    color: "#e34f26",
    index: 0
  },
  {
    name: "CSS",
    level: 10,
    icon: "fab fa-css3-alt",
    story:
      "A specialty of mine. Especially since flexbox and grid came out, it's been a dream to work with. Doubly so for when I'm working with SCSS or Stylus and have variables and mixins at my disposal.",
    color: "#0645ad",
    index: 1
  },
  {
    name: "JavaScript",
    level: 10,
    icon: "fab fa-js",
    story:
      "My problematic fave. It keeps getting better over time, and I have come to appreciate it in spite of (for?) its quirks. I think it'll only continue to be used more widely for the foreseeable future.",
    color: "#f7df1e",
    index: 2
  },
  {
    name: "React",
    level: 9,
    icon: "fab fa-react",
    story:
      "This is the primary framework I use in my work at MPR. I used to prefer Vue for my personal projects, but React has just won me over with its power and versatility. Hooks and ContextAPI helped.",
    color: "#00d8ff",
    index: 3
  },
  {
    name: "Vue",
    level: 7,
    icon: "fab fa-vuejs",
    story:
      "My former favorite JavaScript framework. I love working with single-file components and all the nice little directives that Vue has to offer, and still might elect to use it for simple apps on a tight schedule.",
    color: "#42b883",
    index: 4
  },
  {
    name: "C#",
    level: 5,
    icon: "fab fa-windows",
    story:
      "Learned this on the job at the Design Center, which was primarily an iOS shop, but some clients wanted apps for Windows as well. Once I even built an app for iPad and Surface Pros using Xamarin. It sucked.",
    color: "#68217a",
    index: 5
  },
  {
    name: "Swift",
    level: 7,
    icon: "fab fa-apple",
    story:
      "I learned this at the Design Center as well. When I started we used Objective-C, but in my time there we switched to Swift and storyboards. I still found managing layouts with CSS to be a lot more intuitive.",
    color: "#717175",
    index: 6
  },
  {
    name: "D3.js",
    level: 6,
    icon: "fas fa-chart-area",
    story:
      "I've done a few things with D3, most notably, MPR's 2018 election coverage and a visualization of Kepler objects for a graduate level course. Nowadays I find it most efficient to blend D3's math capabilities with React and svg manipulation.",
    color: "#e500e5",
    index: 7
  },
  {
    name: "Leaflet",
    level: 8,
    icon: "fas fa-globe-americas",
    story:
      "I've had to make quite a few interactive web maps in my various media internships. Leaflet is good, but I have already run up against its limitations. I'm thinking I'll move on to D3 maps before too long.",
    color: "#0000e5",
    index: 8
  },
  {
    name: "Ruby",
    level: 5,
    icon: "fas fa-gem",
    story:
      "Learned this for my current job at MPR. Everything there runs on Rails, and I had a lot of fun running through exercism.io exercises and learning about all the little tricks and conveniences it has.",
    color: "#cc342d",
    index: 9
  },
  {
    name: "Rails",
    level: 5,
    icon: "fas fa-subway",
    story:
      "Learned it for my current job at MPR. Most of our sites run on Rails and React. I mostly work on the front end, so I feel like my knowledge of Rails is spotty. Still, I rebuilt the Classical 24 website with Ruby and Vue.",
    color: "#cc0000",
    index: 10
  },
  {
    name: "C++",
    level: 4,
    icon: "fas fa-code",
    story:
      'Used it in school. Found it easier to use than Java, weirdly enough. My team of four made a project with it where virtual "cars" would detect "obstacles" and automatically steer to avoid them.',
    color: "#a31f34",
    index: 11
  },
  {
    name: "Java",
    level: 2,
    icon: "fab fa-java",
    story:
      "Forced to use it in school and in my first job out of college (albeit lightly). Not a huge fan.",
    color: "#007396",
    index: 12
  },
  {
    name: "C",
    level: 1,
    icon: "fas fa-terminal",
    story:
      "Ugh, let's not even go there. Low-level operating systems are apparently not my thing.",
    color: "#543729",
    index: 13
  }
];

let skillCards = document.getElementById("skills_cards");

skills.sort((a, b) => b.index - a.index);

skills.map(skill => {
  let skillCard = document.createElement("div");
  skillCard.classList.add("skills_card");

  let skillCardTop = document.createElement("div");
  skillCardTop.classList.add("skills_card-top");

  let skillCardBottom = document.createElement("div");
  skillCardBottom.classList.add("skills_card-bottom");

  let skillLevelTop = document.createElement("div");
  let skillLevelTopText = document.createTextNode(skill.level);
  skillLevelTop.classList.add("skill_level");
  skillLevelTop.appendChild(skillLevelTopText);

  let skillNameTop = document.createElement("div");
  let skillNameTopText = document.createTextNode(skill.name);
  skillNameTop.classList.add("skill_name");
  skillNameTop.appendChild(skillNameTopText);

  skillCardTop.appendChild(skillLevelTop);
  skillCardTop.appendChild(skillNameTop);

  let skillLevelBottom = document.createElement("div");
  let skillLevelBottomText = document.createTextNode(skill.level);
  skillLevelBottom.classList.add("skill_level");
  skillLevelBottom.appendChild(skillLevelBottomText);

  let skillNameBottom = document.createElement("div");
  let skillNameBottomText = document.createTextNode(skill.name);
  skillNameBottom.classList.add("skill_name");
  skillNameBottom.appendChild(skillNameBottomText);

  skillCardBottom.appendChild(skillNameBottom);
  skillCardBottom.appendChild(skillLevelBottom);

  let skillIcon = document.createElement("i");
  skillIcon.setAttribute("class", skill.icon);
  skillIcon.classList.add("skills_card-icon");
  skillIcon.setAttribute("style", `color: ${skill.color}`);

  let skillDesc = document.createElement("p");
  let skillDescText = document.createTextNode(skill.story);
  skillDesc.classList.add("skills_card-desc");
  skillDesc.appendChild(skillDescText);

  skillCard.appendChild(skillCardTop);
  skillCard.appendChild(skillIcon);
  skillCard.appendChild(skillDesc);
  skillCard.appendChild(skillCardBottom);

  skillCards.appendChild(skillCard);
});

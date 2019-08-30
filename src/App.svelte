<script>
  export let name;
  name = "Kim Thompson";
</script>

<style>
  :global(:root){
    --header-color: maroon 
  }  

  h1 {
    color: black;
  }
</style>

<header class="header">
  <a href="/">
    <h1 class="header_title">{name}</h1>
  </a>
  <button class="menuButton" id="menuToggle" aria-label="menu button">
    <i class="fa fa-caret-down"/>
  </button>
  <div class="menu">
    <nav>
      <ul id="menu" class="navlinks hide">
        <li class="navlinks_link">
          <a href="#about" aria-label="about me">
            <i class="fa fa-info" />
            <span>About</span>
          </a>
        </li>
        <li class="navlinks_link">
          <a href="#skills" aria-label="skills">
            <i class="fa fa-code" />
            <span>Skills</span>
          </a>
        </li>
        <li class="navlinks_link">
          <a href="https://medium.com/kim-thompson" aria-label="my medium blog">
            <i class="fab fa-medium-m" />
            <span>Blog</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<!-- TODO: Other components of the site inserted here -->

<footer>
  <div class="icon_buttons">
    <div class="icon_button">
      <a href="https://github.com/kimthompson" aria-label="GitHub">
        <i class="fab fa-github-alt">
      </a>
    </div>
    <div class="icon_button">
      <a href="https://medium.com/kim-thompson" aria-label="Medium blog">
        <i class="fab fa-medium-m">
      </a>
    </div>
    <div class="icon_button">
      <a href="https://codepen.io/KimicalBurn/#" aria-label="Codepen">
        <i class="fab fa-codepen">
      </a>
    </div>
    <div class="icon_button">
      <a href="https://twitter.com/byKimThompson" aria-label="The hellscape known as Twitter">
        <i class="fab fa-twitter">
      </a>
    </div>
    <div class="icon_button">
      <a href="https://youtube.com/KimicalBurn" aria-label="YouTube">
        <i class="fab fa-youtube">
      </a>
    </div>
  </div>
  <a href="../Feb2019.pdf" class="btn-resume">Resume</a>
</footer>

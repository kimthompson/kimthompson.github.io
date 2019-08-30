<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
  }

  .header_title {
    font-size: 10vw;
  }

  .header_title:hover {
    color: var(--maroon_flush);
    transition: all 200ms;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  }
   
  .menu {
    display: flex;
    justify-content: flex-end;
  }

  .menuButton {
    margin: 0;
  }

  .menuButton .fa {
    color: var(--razzmatazz);
    font-size: 5rem;
  }

  .menuButton .fa:hover {
    color: var(--maroon_flush);
  }

  @media screen and (min-width: 900px) {
    .header_title {
      font-size: 7rem;
    }
  }

  .navlinks {
    margin: 0 15px 0 30px;
  }

  .navlinks_link {
    line-height: 2.5rem;
  }

  .navlinks_link a {
    color: pastel_gray;
  }

  .navlinks_link a:hover {
    color: v_white;
    transition: all 200ms linear;
  }

  .navlinks_link a i {
    width: 50px;
    font-size: 2rem;
  }

  .navlinks_link a span {
    font-size: 2rem;
  }

  .navlinks li {
    transition: opacity 200ms linear;
  }

  .navlinks.hide li {
    opacity: 0;
  }

  .navlinks.hide li:nth-child(3) {
    transition-delay: 0;
  }

  .navlinks.hide li:nth-child(2) {
    transition-delay: 100ms;
  }

  .navlinks.hide li:nth-child(1) {
    transition-delay: 200ms;
  }

  .navlinks.show li {
    opacity: 1;
  }

  .navlinks.show li:nth-child(1) {
    transition-delay: 0;
  }

  .navlinks.show li:nth-child(2) {
    transition-delay: 100ms;
  }

  .navlinks.show li:nth-child(3) {
    transition-delay: 200ms;
  }
</style>

<header class="header">
  <a href="/">
    <h1 class="header_title">Kim Thompson<h1>
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

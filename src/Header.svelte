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
    flex-direction: column;
    align-items: flex-end;
  }

  .menuButton {
    margin: 0;
    background-color: transparent;
    border: 0;
  }

  .menuButton .fa {
    color: var(--razzmatazz);
    font-size: 5rem;
  }

  .menuButton .fa:hover {
    color: var(--maroon_flush);
  }

  .navlinks {
    margin: 0 15px 0 30px;
    list-style-type: none;
    margin-right: -5px;
  }

  .navlinks_link {
    line-height: 2.5rem;
  }

  .navlinks_link a {
    color: var(--pastel_gray);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: right;
  }

  .navlinks_link a:hover {
    color: var(--v_white);
    transition: all 200ms linear;
  }

  .navlinks_link a i {
    width: 50px;
    font-size: 2rem;
    text-align: center;
  }

  .navlinks_link a div {
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

  @media screen and (min-width: 900px) {
    .header_title {
      font-size: 7rem;
    }
  }
</style>

<script>
  import { fade } from 'svelte/transition';

  let isHidden = true;

  function toggleMenu() {
    isHidden = !isHidden;
  }
</script>

<header class="header">
  <a href="/">
    <h1 class="header_title">Kim Thompson<h1>
  </a>
  <div class="menu">
    <button class="menuButton" aria-label="menu button" on:click={toggleMenu}>
      <i class="fa fa-caret-down"/>
    </button>
    <div>
      <nav>
        <ul id="menu" class="navlinks {isHidden ? 'hide' : 'show'}">
          <li class="navlinks_link">
            <a href="#about" aria-label="about me">
              <div>About</div>
              <i class="fa fa-info" />
            </a>
          </li>
          <li class="navlinks_link">
            <a href="#skills" aria-label="skills">
              <div>Skills</div>
              <i class="fa fa-code" />
            </a>
          </li>
          <li class="navlinks_link">
            <a href="https://medium.com/kim-thompson" aria-label="my Medium blog">
              <div>Blog</div>
              <i class="fab fa-medium-m" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

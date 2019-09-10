<style>
  footer { 
    background-color: var(--pastel_gray);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fab {
    font-size: 4rem;
  }

  .btn-resume {
    font-size: 3em;
    border-radius: 3px;
    border: 2px solid var(--gunmetal);
    background-color: var(--razzmatazz);
    color: var(--gunmetal);
    padding: 2px 9px;
    margin: 25px;
  }

  .btn-resume:hover {
    background-color: var(--maroon_flush);
    transition: all 200ms linear;
  }

  .icon_buttons {
    display: flex;
    margin-top: 25px;
  }

  .icon_button {
    background-color: var(--razzmatazz);
    width: 50px;
    height: 50px;
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
    border: 2px solid var(--gunmetal);
  }

  .icon_button i { 
    padding: 7px;
    color: var(--gunmetal);
  }

  .icon_button i.fa-youtube {
    padding: 5px 3px;
  }

  .icon_button i.fa-medium-m, .icon_button i.fa_codepen {
    padding: 5px;
  }

  @media screen and (max-width: 500px) {
    .fab {
      font-size: 2.5rem;
    }

    .icon_button {
      width: 30px;
      height: 30px;
      padding: 5px;
      margin: 5px;
      border-radius: 2px;
      border: 2px solid var(--gunmetal);
    }

    .icon_button i { 
      padding: 3px;
    }

    .icon_button i.fa-youtube {
      padding: 3px 2px;
    }

    .icon_button i.fa-medium-m, .icon_button i.fa_codepen {
      padding: 3px;
    }

    .icon_button:hover {
      background-color: var(--maroon_flush);
      transition: all 100ms linear;
    }
  }
</style>

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
  <a href="/Feb2019.pdf" class="btn-resume">Resume</a>
</footer>

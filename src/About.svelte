<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about img { 
    width: 90%;
    max-width: 500px;
    max-height: 500px;
    margin-bottom: -75px;
    z-index: var(--headshot_z_index);
  }

  .about_desc {
    max-width: 950px;
    margin: 20px;
    text-align: center;
  }

  @media(min-width: 400px) {
    .about_desc {
      margin-top: 75px;
    }

    h2 {
      color: var(--gunmetal);
    }

    p {
      margin-top: 15px;
      font-size: 2.2rem;
      line-height: 3.2rem;
    }
  }
</style>

<section id="about" class="about">
  <img class="icon" src="/images/kim_icon_500x500.png" alt="Art by @lady_red_art on Instagram" />
  <div class="about_desc">
    <h2>About Me</h2>
    <p>I’m a software developer and writer who has been living and working in the Twin Cities since I graduated from the University of Minnesota in 2015. I'm a generalist with experience making applications for web, Windows and iOS. I currently make web apps for Minnesota Public Radio, and I'm starting to dabble in video essay production.</p>
  </div>
</section>

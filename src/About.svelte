<script>
  import { livejournal } from "./data/livejournal.js";
</script>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about_desc {
    max-width: 950px;
    margin: 20px;
    text-align: center;
  }

  .livejournal {
    position: relative;
    font-size: 1.6rem;
  }

  table {
    margin: 75px 10px 0 10px;
    transform: rotate(4deg);
  }

  td {
    padding: 2px;
  }

  h2 {
    margin-top: 15px;
    color: var(--gunmetal);
  }

  p {
    font-size: 1.8em;
  }

  figure {
    margin-bottom: -80px;
    z-index: var(--headshot_z_index);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figure img {
    width: 90%;
    max-width: 500px;
    max-height: 500px;
  }

  figure figcaption {
    transform: translateX(180px) translateY(-20px) rotate(4deg);
    width: 150px;
  }

  .livejournal_background {
    position: absolute;
    z-index: var(--livejournal_z_index);
  }

  .livejournal_background-rect {
    fill: var(--razzmatazz);
  }

  .livejournal_attr {
    text-align: right;
    font-weight: 600;
  }

  @media (min-width: 400px) {
    .about_desc {
      margin-top: 75px;
    }

    p {
      margin-top: 15px;
      font-size: 2.2rem;
      line-height: 3.2rem;
    }
  }

  @media (max-width: 400px) {
    .livejournal {
      font-size: 1.5rem;
    }

    figure figcaption {
      transform: translateX(-38px) translateY(-30px) rotate(0deg);
      width: 100px;
      align-self: flex-start;
      font-size: 0.85em;
    }

    table {
      margin: 50px 0 0 0;
      transform: rotate(0deg);
      background-color: var(--razzmatazz);
    }

    .livejournal_background {
      display: none;
    }
  }
</style>

<section id="about" class="about">
  <figure>
    <img
      class="icon"
      src="/images/kim_icon_500x500.png"
      alt="Art by @lady_red_art on Instagram" />
    <figcaption>
      Art by
      <a href="https://www.instagram.com/lady_red_art/">@lady_red_art</a>
      on Instagram
    </figcaption>
  </figure>
  <div class="livejournal">
    <svg
      class="livejournal_background"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 525">
      <polygon
        stroke="0"
        class="livejournal_background-rect"
        points="0 50 1000 150 1000 525 0 475" />
    </svg>
    <table id="livejournal">
      {#each livejournal as status}
        <tr class="livejournal_data">
          <td class="livejournal_label">{status.category}</td>
          <td class="livejournal_attr">{status.name}</td>
        </tr>
      {/each}
    </table>
  </div>
  <div class="about_desc">
    <h2>About Me</h2>
    <p>
      I’m a software developer and writer who has been living and working in the
      Twin Cities since I graduated from the University of Minnesota in 2015.
      I'm a generalist with experience making applications for web, Windows and
      iOS. I currently make web apps for Minnesota Public Radio, and I'm
      starting to dabble in video essay production.
    </p>
  </div>
</section>

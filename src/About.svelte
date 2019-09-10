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

  @media(min-width: 400px) {
    .about_desc {
      margin-top: 75px;
    }

    p {
      margin-top: 15px;
      font-size: 2.2rem;
      line-height: 3.2rem;
    }
  }

  @media(max-width: 400px) {
    .livejournal {
      font-size: 1.5rem
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

<script>
const livejournal = [
  { category: "currently reading", name: "Snow Crash" },
  { category: "currently playing", name: "Fire Emblem: Three Houses" },
  { category: "currently watching", name: "Pushing Up Daisies" },
  { category: "currently playing (mmo edition)", name: "SHADOWBRINGERS" },
  {
    category: "currently watching (anime edition)",
    name: "Pop Team Epic"
  }
];
</script>

<section id="about" class="about">
  <img class="icon" src="/images/kim_icon_500x500.png" alt="Art by @lady_red_art on Instagram" />
  <div class="livejournal">
    <svg class="livejournal_background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 525">
      <polygon stroke="0" class="livejournal_background-rect" points="0 50 1000 150 1000 525 0 475" />
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
    <p>I’m a software developer and writer who has been living and working in the Twin Cities since I graduated from the University of Minnesota in 2015. I'm a generalist with experience making applications for web, Windows and iOS. I currently make web apps for Minnesota Public Radio, and I'm starting to dabble in video essay production.</p>
  </div>
</section>

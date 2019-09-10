<style>
  .skills {
    font-size: 2.25em;
    text-align: center;
    font-family: var(--font_mono);
    font-weight: 500;
    color: var(--pastel_gray);
    background-color: var(--gunmetal);
    padding: 25px 10px 10px 10px;
    height: 500px;
  }

  h2 {
    color: var(--pastel_gray);
    margin-bottom: 10px;
  }

  h3 {
    display: flex;
    justify-content: center;
  }

  button {
    border: 2px solid var(--pastel_gray);
    padding: 4px 8px;
  }

  .fab, .fas {
    font-size: 22rem;
    opacity: 0.3;
    z-index: var(--card_icon_z_index);
  }

  .skills_cards {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 20px;
  }

  .skills_card {
    display: grid;
    align-items: center;
    grid-template-columns: auto;
    grid-template-rows: 25px auto 25px;
    position: absolute;
    z-index: var(--card_z_index);
    background-color: var(--pastel_gray); 
    color: var(--v_black);
    width: 275px;
    height: 325px;
    padding: 10px;
    box-shadow: var(--box_shadow_1);
    z-index: var(--card_z_index);
  }

  .skills_card-top {
    display: flex;
    justify-content: space-between;
    grid-row: 1;
  }

  .skills_card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    grid-row: 3;
  }

  .skills_card-icon {
    grid-row: 2;
    grid-column: 1;
    z-index: var(--card_icon_z_index);
  }

  .skills_card-desc {
    grid-row: 2;
    grid-column: 1;
    z-index: var(--card_icon_z_desc);
    font-size: 0.9em;
    font-weight: 500;
    font-family: var(--font_sans);
  }
  
  .skills_header .fas {
    opacity: 1.0;
    font-size: 1em;
    z-index: 0;
  }

  .skills_header div {
    margin: 0 10px 0 10px;
  }
</style>

<script>
  import { onMount } from "svelte"
  import { Stack } from "swing"
  import { skills } from './data/skills.js'

  skills.sort((a, b) => b.index - a.index)

  onMount(async function() {
    const config = {
      minThrowOutDistance: 300,
      maxThrowOutDistance: 350
    };

    const cards = [].slice.call(document.querySelectorAll(".skills_card"))
    const stack = Stack(config)

    cards.forEach(targetElement => {
      stack.createCard(targetElement)
    });
  });
</script>

<section id="skills" class="skills">
  <div class="skills_header">
    <h2>Skills</h2>
    <h3>
      <i class="fas fa-long-arrow-alt-left"></i>
      <div>Swipe to throw these cards around</div>
      <i class="fas fa-long-arrow-alt-right"></i>
    </h3>
  </div>
  <div id="skills_cards" class="skills_cards">
    {#each skills as skill}
    <div class="skills_card">
      <div class="skills_card-top">
        <div class="skill_level">{skill.level}</div>
        <div class="skill_name">{skill.name}</div>
      </div>
      <i class={`skills_card-icon ${skill.icon}`} style={`color: ${skill.color}`} />
      <p class="skills_card-desc">{skill.story}</p>
      <div class="skills_card-bottom">
        <div class="skill_name">{skill.name}</div>
        <div class="skill_level">{skill.level}</div>
      </div>
    </div>
    {/each}
  </div>
</section>

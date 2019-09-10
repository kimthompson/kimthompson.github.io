<style>
  .portfolio {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    text-align: center;
    font-size: 1.9em;
    background-color: var(--puce);
  }

  h1, h2, h3, h4, p, a {
    color: var(--v_black);
    text-shadow: var(--gunmetal) 0px 0px 1px
  }

  .item {
    display: flex;
  }

  .item-inner {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  
  .item-inner p {
    margin: 0 3px;
  }

  .item-inner img {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    object-fit: fill;
    position: relative;
    z-index: var(--portfolio_z_index);
  }
  
  .overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    z-index: var(--portfolio_image_z_index);
    color: var(--v_black);
  }

  .item-event .overlay {
    background-color: var(--razzmatazz_fade);
  }

  .item-event .overlay:hover {
    background-color: var(--razzmatazz);
  }

  .item-project .overlay {
    background-color: var(--maya_blue_fade);
  }

  .item-project .overlay:hover {
    background-color: var(--maya_blue);
  }

  .item-article .overlay {
    background-color: var(--razzmatazz_fade);
  }

  .item-article .overlay:hover {
    background-color: var(--razzmatazz);
  }

  .item-video .overlay {
    background-color: var(--maroon_flush_fade);
    color: var(--v_white);
  }

  .item-video .overlay:hover {
    background-color: var(--maroon_flush);
  }
</style>

<script>
  import { portfolio } from './data/portfolio.js';

  portfolio.sort((a, b) => a.order - b.order);
</script>

<section class="portfolio">
  {#each portfolio as tile}
  <div class="item">
    <a class={`item-inner item-${tile.category}`} href={tile.link}>
      {#if tile.thumbnail !== ""}
        <img class="image" src={tile.thumbnail} alt={tile.short_description} />
      {/if}
      <div class="overlay">
        <h3>{tile.title}</h3>
        <h4>{tile.date}<h4>
        {#if tile.category === "event"}
          <p>{tile.long_description}</p>
        {/if}
    </a>
  </div>
  {/each}
</section>

<script>
  import { portfolio } from "./data/portfolio.js";

  portfolio.sort((a, b) => b.order - a.order);
</script>

<style>
  .portfolio {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    text-align: center;
    font-size: 1.9em;
    background-color: var(--puce);
  }

  h3,
  h4,
  p,
  a {
    color: var(--v_black);
    text-shadow: var(--gunmetal) 0px 0px 1px;
  }

  .item-inner {
    display: grid;
  }

  .item-inner img {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    object-fit: fill;
    z-index: var(--portfolio_z_index);
  }

  .overlay {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    justify-self: stretch;
    align-self: stretch;
    z-index: var(--portfolio_overlay_z_index);
  }

  .overlay-event {
    background-color: var(--razzmatazz_fade);
  }

  .item-inner:hover .overlay-event {
    background-color: var(--razzmatazz);
  }

  .overlay-project {
    background-color: var(--maya_blue_fade);
  }

  .item-inner:hover .overlay-project {
    background-color: var(--maya_blue);
  }

  .overlay-article {
    background-color: var(--puce_fade);
  }

  .item-inner:hover .overlay-article {
    background-color: var(--puce);
  }

  .overlay-video {
    background-color: var(--maroon_flush_fade);
  }

  .item-inner:hover .overlay-video {
    background-color: var(--maroon_flush);
  }

  .item_text {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    justify-self: center;
    align-self: center;
    z-index: var(--portfolio_text_z_index);
  }

  .transparent {
    opacity: 0;
  }
</style>

<section class="portfolio">
  {#each portfolio as tile}
    <div class="item">
      <a class="item-inner" href={tile.link}>
        {#if tile.thumbnail !== ''}
          <img src={tile.thumbnail} alt={tile.short_description} />
        {:else}
          <img
            class="transparent"
            src="/images/kim_icon_250x250.png"
            alt="nothing to see here" />
        {/if}
        <div class="item_text">
          <h3>{tile.title}</h3>
          <h4>
            {tile.date}
            <h4>
              {#if tile.category === 'event'}
                <p>{tile.long_description}</p>
              {/if}
            </h4>
          </h4>
        </div>
        <div class="overlay overlay-{tile.category}" />
      </a>
    </div>
  {/each}
</section>

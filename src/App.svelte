<script>
  import Header from "./Header.svelte";
  import About from "./About.svelte";
  import Skills from "./Skills.svelte";
  import Portfolio from "./Portfolio.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>
  :global(:root) {
    /* FONTS */
    --font_sans: "Fira Sans", Helvetica, sans-serif;
    --font_mono: "Fira Mono", "Lucida Console", monospace;

    /* COLORS */
    --maya_blue: hsl(201, 93%, 71%); /* accent from icon */
    --maya_blue_fade: hsla(201, 93%, 71%, 0.75);
    --razzmatazz: hsl(336, 85%, 53%); /* accent from icon */
    --razzmatazz_fade: hsla(336, 85%, 53%, 0.75);
    --gunmetal: hsl(233, 22%, 23%);
    --gunmetal_fade: hsla(233, 22%, 23%, 0.75);
    --maroon_flush: hsl(340, 72%, 39%);
    --maroon_flush_fade: hsla(340, 72%, 39%, 0.75);
    --v_black: hsl(0, 0%, 5%);
    --eerie_black: hsl(20, 6%, 9%);
    --eerie_black_fade: hsla(20, 6%, 9%, 0.75);
    --dark_puce: hsl(327, 7%, 25%);
    --dark_puce_fade: hsla(327, 7%, 25%, 0.75);
    --puce: hsl(330, 11%, 78%);
    --puce_fade: hsla(330, 11%, 78%, 0.75);
    --pastel_gray: hsl(336, 7%, 87%);
    --pastel_gray_fade: hsla(336, 7%, 87%, 0.75);
    --v_white: hsl(0, 0%, 95%);

    /* BREAKPOINTS */
    --mega: 90em;
    --desktop: 70em;
    --laptop: 64em;
    --tablet: 50em;
    --phablet: 37.5em;
    --phone: 28em;

    /* MATERIAL DESIGN BOX SHADOW */
    --box_shadow_1: 0 1px 3px hsla(0, 0%, 0%, 0.12),
      0 1px 2px hsla(0, 0%, 0%, 0.24);
    --box_shadow_2: 0 3px 6px hsla(0, 0%, 0%, 0.16),
      0 3px 6px hsla(0, 0%, 0%, 0.23);
    --box_shadow_3: 0 10px 20px hsla(0, 0%, 0%, 0.19),
      0 6px 6px hsla(0, 0%, 0%, 0.23);
    --box_shadow_4: 0 14px 28px hsla(0, 0%, 0%, 0.25),
      0 10px 10px hsla(0, 0%, 0%, 0.22);
    --box_shadow_5: 0 19px 38px hsla(0, 0%, 0%, 0.3),
      0 15px 12px hsla(0, 0%, 0%, 0.22);

    /* Z-INDEX */
    --background_z_index: -1000;
    --headshot_z_index: -900;
    --livejournal_z_index: -800;

    --portfolio_z_index: 100;
    --portfolio_overlay_z_index: 101;
    --portfolio_text_z_index: 102;

    --card_z_index: 200;
    --card_icon_z_index: 201;
    --card_icon_z_desc: 202;
  }

  .body {
    overflow: auto;
  }

  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: var(--background_z_index);
  }

  .background_tri-top {
    fill: var(--gunmetal);
    stroke: 0;
  }
</style>

<svg
  class="background"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1000 1600">
  <polygon
    class="background_tri-top"
    stroke="0"
    points="0 0 1000 0 1000 400 500 650 0 400" />
</svg>

<div class="body">
  <Header />
  <About />
  <Skills />
  <Portfolio />
  <Footer />
</div>

<script>
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
</script>

<!-- key observes for whatever changes in rhs and renders the page -->
{#key $page.url}
  <div in:fly={{ y: "-100%", duration: 690 }}>
    <slot />
  </div>
{/key}

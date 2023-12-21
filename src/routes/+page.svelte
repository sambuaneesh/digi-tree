<script lang="ts">
  import "../app.css";
  //   import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  //   onMount(() => {
  //     setTimeout(() => {
  //       goto("/login", { replaceState: false });
  //     }, 2000);
  //   });
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img
      src="android-chrome-512x512.png"
      class="max-w-sm rounded-lg shadow-2xl"
      alt="logo"
    />
    <div class="flex flex-col">
      <h1 class="text-5xl font-bold mx-auto">Welcome to Digi-Tree!</h1>
      <p class="py-6">
        This is a simple web app that allows you users to create a simple
        landing page with a collection of links to their social media accounts.
        This app has been inspired from <a href="https://linktr.ee">linktr.ee</a
        >
        and is built using <a href="https://kit.svelte.dev">SvelteKit</a> by
        following tutorial series from
        <a href="https://fireship.io">Fireship.io</a>
      </p>
      <div class="flex">
        <button
          class="btn btn-primary mx-auto"
          on:click={() => {
            goto("/login", { replaceState: false });
          }}>Get Started</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  a {
    font-weight: bold;
    color: #fff;
  }
</style>

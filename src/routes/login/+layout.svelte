<script lang="ts">
    import { page } from "$app/stores";
  </script>
  
  <main class="card w-4/6 bg-neutral text-neutral-content mx-auto my-11 max-w-xl">
    <div class="card-body items-center text-center">
      <slot />
    </div>
  </main>

  <nav class="flex justify-center my-6">
    <ul class="steps steps-vertical">
      <a href="/login" class="step step-primary">Sign In</a>
      <a
        href="/login/username"
        class="step"
        class:step-primary={$page.route.id?.match(/username|photo/g)}>
        Choose Username
      </a>
      <!-- .match(/username|photo/g) = regex for searching that field and applying the class to highlight if on that page -->
      <a
        href="/login/photo"
        class="step"
        class:step-primary={$page.route.id?.includes("photo")}>
        Upload Photo
      </a>
      <!-- .includes("photo" = alternative to the regex -->
    </ul>
  </nav>
  
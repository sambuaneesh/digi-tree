<script lang="ts">
  import { goto } from "$app/navigation";
  import { auth, user } from "$lib/firebase";

  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);
    // wait for 2sec and go to /login/username
    setTimeout(() => {
      goto("/login/username", { replaceState: false });
    }, 1500);
  }

  function handleSignOut() {
    signOut(auth);
    goto("/");
  }
</script>

{#if $user}
  <h2 class="card-title">Welcome, {$user.displayName}</h2>
  <p class="text-centre text-success">You are logged in!</p>
  <button class="btn btn-danger" on:click={handleSignOut}>Logout</button>
{:else}
  <button class="btn btn-primary" on:click={signInWithGoogle}
    >Sign in with Google</button
  >
{/if}

<!-- Sign in using redirect -->
<!-- async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
} -->

<script>
    import { onMount } from "svelte";

    let config = undefined;

    let saved = true;
    $: if (config == undefined) saved = false;

    onMount(() => {
        window.Twitch.ext.onAuthorized(function () {
            config = window.Twitch.ext.configuration.broadcaster.content;
        });
    });

    function set() {
        if (config == undefined) return;
        window.Twitch.ext.configuration.set("broadcaster", "", config);
        saved = true;
    }
</script>

<div class="header">
    <h1>Karl.gg Profile Link:</h1>
</div>

<form on:submit|preventDefault={set}>
    <input placeholder="https://karl.gg/profile/1234" bind:value={config} on:input={() => (saved = false)} />
    <button type="submit" disabled={saved == true}>
        {#if saved == true}
            Saved
        {:else}
            Save
        {/if}
    </button>
</form>

<style lang="postcss">
    input {
        @apply p-2 w-80 bg-gray-800 rounded-md;
    }

    button[type="submit"] {
        @apply ml-1 p-2 rounded-md font-medium;
        @apply bg-orange-500 disabled:bg-orange-400;
    }
</style>

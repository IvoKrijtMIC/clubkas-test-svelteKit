<script lang="ts">
	import { parseNumber } from "$lib/utils";

    export let current = 0.00;
    export let target = 0.00;
</script>

<div class="progress-bar mt-5 mb-5">
    <h2 class="text-2xl text-center mb-2 font-semibold">Mijn opbrengst</h2>
    <progress class="rounded-full bg-mic-light w-full" value={parseNumber(current)} max={target}></progress>
</div>

<style>
    progress::-moz-progress-bar {
        background-color: theme('colors.mic-pink');
    }
    progress::-webkit-progress-bar {
        background-color: theme('colors.mic-pink');
    }
</style>
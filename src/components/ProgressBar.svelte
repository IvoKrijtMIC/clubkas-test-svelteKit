<script lang="ts">
    export let progressTitle: string = "Mijn opbrengst";
    export let progressValue: number = 0.00;
    export let progressMax: number = 0.00;
</script>

<div class="progress-bar mt-5 mb-5">
    <h2 class="text-2xl text-center mb-2 font-semibold">{progressTitle}</h2>
    <progress class="rounded-full bg-mic-light w-full " value="{progressValue}" max="{progressMax}"></progress>
</div>

<style>
    progress::-moz-progress-bar {
        background-color: theme('colors.mic-pink');
    }
    progress::-webkit-progress-bar {
        background-color: theme('colors.mic-pink');
    }
</style>
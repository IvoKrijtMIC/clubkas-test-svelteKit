<script lang="ts">
    export let statsAmount: number = 0.00;
    export let statsDonations: number = 0;
</script>

<div class="stats flex justify-center">
    <div class="stats-item bg-mic-light p-2 pr-4 rounded-l-lg border-r text-center w-[90px]">
        <p>Bedrag</p>
        <h3 class="text-lg font-semibold">€{statsAmount}</h3>
    </div>
    <div class="stats-item bg-mic-light p-2 pl-4 rounded-r-lg border-l text-center w-[90px]">
        <p>Donaties</p>
        <h3 class="text-lg font-semibold">{statsDonations}</h3>
    </div>
</div>
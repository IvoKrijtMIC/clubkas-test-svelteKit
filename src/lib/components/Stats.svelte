<script lang="ts">
	import { parseNumber } from "$lib/utils";

    export let current = 0.00;
    export let donations = 0;
</script>

<div class="stats flex justify-center">
    <div class="stats-item bg-mic-light p-2 pr-4 rounded-l-lg border-r text-center w-[90px]">
        <p>Bedrag</p>
        <h3 class="text-lg font-semibold">€{parseNumber(current)}</h3>
    </div>
    <div class="stats-item bg-mic-light p-2 pl-4 rounded-r-lg border-l text-center w-[90px]">
        <p>Donaties</p>
        <h3 class="text-lg font-semibold">{donations}</h3>
    </div>
</div>
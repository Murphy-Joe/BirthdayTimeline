<script lang="ts">
	import { Months } from './../models/months';
	export let innerWidth: number;
	export let unitsPerYear: number;
</script>

<div class="grid-container-month">
	{#each { length: 12 } as _, i}
		<div class="month" style="width:{innerWidth / unitsPerYear}px">
			{Months[i + 1]}
		</div>
	{/each}
</div>

<style>
	:global(.grid-container-month) {
		display: grid;
		grid-template-columns: repeat(12, auto);
		justify-items: center;
		border: 1px solid purple;
	}

	.month {
		background-color: aqua;
		height: 3rem;
		border: 1px solid blue;
	}
</style>

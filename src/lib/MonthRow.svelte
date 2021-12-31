<script lang="ts">
	// import { Months } from './../models/months';
	export let Months;
	export let innerWidth;
	export let unitsPerYear;
</script>

<div class="grid-container-month">
	{#each { length: 12 } as _, i}
		<div class="month" style="width:{innerWidth / unitsPerYear}px">
			{Months[i + 1]}
		</div>
	{/each}
</div>

<style>
	.month {
		background-color: aqua;
		height: 3rem;
		border: 1px solid blue;
	}
</style>

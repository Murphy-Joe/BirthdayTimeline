<script lang="ts">
	// import { Months } from './../models/months';
	export let unitsPerMonth;
	export let unitsPerYear;
	export let innerWidth;
</script>

<div class="grid-container-month">
	{#each { length: 12 } as _, i}
		<div class="grid-container-day">
			{#each { length: unitsPerMonth } as _, i}
				<div class="bday-symbol" style="width:{innerWidth / unitsPerYear / unitsPerMonth}px">
					*
					<br />
					joe
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid-container-day {
		display: grid;
		grid-template-columns: repeat(30, auto);
		border: 1px solid red;
	}

	.bday-symbol {
		height: 3rem;
	}
</style>

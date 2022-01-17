<script lang="ts">
	import { DaysPerMonth } from './../models/calendar';
import { Months } from './../models/months';
	export let innerWidth: number;
	export let monthsToDisplay: number;
	let daysInMonth = 0
	let portionOfScreen = 0
</script>

<!-- <div class="grid-container-month">
	{#each { length: 12 } as _, i}
		<div class="month" style="width:{innerWidth / monthsToDisplay}px">
			{Months[i + 1]}
		</div>
	{/each}
</div> -->

<div class="grid-container-year">
	{#each { length: 12 } as _, i}
		<div class="month" style="width:{(innerWidth / monthsToDisplay) * (DaysPerMonth[Months[i+1]]["days"]/30.5)}px; background-color:red">
			<!-- (366/DaysPerMonth[Months[i+1]]["days"]) -->
			{Months[i + 1]}
		</div>
	{/each}
</div>

<style>
	:global(.grid-container-month) {
		display: grid;
		grid-template-columns: repeat(12, auto);
		/* grid-template-columns: 31fr 29fr 31fr 30fr 31fr 30fr 31fr 31fr 30fr 31fr 30fr 31fr; */
		justify-items: center;
		border: 1px solid purple;
	}

	.grid-container-year {
		display: grid;
		grid-template-columns: repeat(12, auto);
		/* grid-template-columns: 31fr 29fr 31fr 30fr 31fr 30fr 31fr 31fr 30fr 31fr 30fr 31fr; */
		justify-items: center;
		border: 1px solid purple;
	}
	.month {
		background-color: aqua;
		height: 3rem;
		/* border: .1px solid blue; */
	}
</style>

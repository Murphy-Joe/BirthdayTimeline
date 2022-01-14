<script lang="ts">
import { DateConverter } from "./../utils/dateConverter";

import { calendarByMonth } from "./../stores";

	export let monthsToDisplay: number
	export let innerWidth: number

	let lastBday = 0

	function setLastBday(month: number, day:number){
		lastBday = DateConverter.DayOfYear(month, day)
	}
	// day of year, if statement for within 7

	const bdayNamesArraysOfMonth = (month: string): Array<any> =>
		Object.values($calendarByMonth[month]).filter(val =>
			Array.isArray(val) )

</script>

<div class="grid-container-month">
	{#each Object.keys($calendarByMonth) as monthName, monthZeroIdx}
		<div class="grid-container-day">
			{#each bdayNamesArraysOfMonth(monthName) as bdayNames, dayZeroIdx}
				<div class="bday-symbol" style="width:{innerWidth / monthsToDisplay / $calendarByMonth[monthName]["days"]}px">
					{"*".repeat(bdayNames.length)}
					<br />
					{#each bdayNames as bdayName}
						 {bdayName}<br>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid-container-day {
		display: grid;
		grid-template-columns: repeat(30, auto);
		justify-items: center;
		border: 1px solid red;
	}

	.bday-symbol {
		height: 3rem;
	}
</style>

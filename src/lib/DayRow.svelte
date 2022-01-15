<script lang="js">
import { DateConverter } from "./../utils/dateConverter";

import { calendarByMonth, calByMonth } from "./../stores";
import { DaysPerMonth } from "./../models/calendar";

	export let monthsToDisplay
	export let innerWidth

	let lastBday = 0
	function setLastBday(month, day){
		lastBday = DateConverter.DayOfYear(month, day)
	}

</script>

<div class="grid-container-month">
	{#each Object.keys(calByMonth) as monthName, monthZeroIdx}
		<div class="grid-container-day">
			{#each Object.values($calendarByMonth[monthName]) as bdayNames, dayZeroIdx}
				<div class="bday-symbol" style="width:{innerWidth / monthsToDisplay / DaysPerMonth[monthName]["days"]}px">
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
		grid-template-columns: repeat(31, auto);
		justify-items: center;
		border: 1px solid red;
	}

	.bday-symbol {
		height: 3rem;
	}
</style>

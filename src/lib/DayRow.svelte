<script lang="js">
	import { DateConverter } from './../utils/dateConverter';

	import { calendarByDay, bdayBookStore, calByDay } from './../stores';
	import { onMount } from 'svelte';
  import { DaysPerMonth } from './../models/calendar';
import { Months } from './../models/months';

	export let monthsToDisplay;
	export let innerWidth;

	let lastBday = 0;
	function setLastBday(month, day) {
		lastBday = DateConverter.DayOfYear(month, day);
	}

	onMount(() => {
		Object.values($bdayBookStore.calendar).forEach((bdayObj) => {
			// tostring() hack to account for numbers not being passed as numbers
			const dayOfYear = DateConverter.DayOfYear(bdayObj.month.toString(), bdayObj.day.toString());
			$calendarByDay[dayOfYear] = [...calByDay[dayOfYear], bdayObj];
		});
	});
	//asdf
</script>

<div class="grid-container-year">
	{#each Object.values($calendarByDay) as bdayObjectsList, idx}
		<div class="bday-symbol" style="width:{innerWidth / (monthsToDisplay * DateConverter.DaysInMonthFromDayOfYear(idx+1))}px">
			{'*'.repeat(bdayObjectsList.length)}
			<br />
			{#each bdayObjectsList as bdayObj}
				{bdayObj.name}<br />
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid-container-year {
		display: grid;
		grid-template-columns: repeat(366, auto);
		justify-items: center;
		border: 1px solid yellow;
	}

	.bday-symbol {
		height: 3rem;
		/* border: 1px solid green */
	}
</style>

<script lang="ts">
import { calendarByMonth } from "./../stores";

	export let unitsPerYear: number
	export let innerWidth: number

	const bdayNamesArraysOfMonth = (month: string): Array<any> =>
		Object.values($calendarByMonth[month]).filter(val =>
			Array.isArray(val) )

</script>

<div class="grid-container-month">
	{#each Object.keys($calendarByMonth) as monthName}
		<div class="grid-container-day">
			{#each bdayNamesArraysOfMonth(monthName) as bdayNames}
				<div class="bday-symbol" style="width:{innerWidth / unitsPerYear / $calendarByMonth[monthName]["days"]}px">
					{"*".repeat(bdayNames.length)}
					<br />
					{@html bdayNames.join("<br>")}
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

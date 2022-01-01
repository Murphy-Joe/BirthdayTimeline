<script lang="ts">
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import { Months } from './../models/months';
	import { calendar } from './../stores';

	const unitsPerYear = 4;
	const unitsPerMonth = 30;
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="calendar-view">
	<MonthRow {unitsPerYear} {innerWidth} />
	<DayRow {unitsPerYear} {unitsPerMonth} {innerWidth} />
</div>

<!-- <div>{JSON.stringify($calendar)}</div> -->
<div>{$calendar.January['1']}</div>
<div>{Months[1]}</div>

<style>
	.calendar-view {
		overflow-x: scroll;
	}

	div :global(.grid-container-month) {
		display: grid;
		grid-template-columns: repeat(12, auto);
		justify-items: center;
		border: 1px solid purple;
	}
</style>

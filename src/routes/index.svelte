<script lang="ts">
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import { Months } from './../models/months';
	import { calendar } from './../stores';

	let unitsPerMonth = 30;
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="top-level">
	<MonthRow {Months} {innerWidth} />
	<DayRow {unitsPerMonth} {innerWidth} />
</div>

<!-- <div>{JSON.stringify($calendar)}</div> -->
<div>{$calendar.January['1']}</div>

<style>
	div :global(.grid-container-month) {
		display: grid;
		grid-template-columns: repeat(12, auto);
		justify-items: center;
		border: 1px solid purple;
	}
</style>

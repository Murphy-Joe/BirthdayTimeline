<script lang="ts">
	import { bdayBookStore, calByMonthStore } from './../stores';
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import ScratchForm from '$lib/BirthdayForm.svelte';
	import Login from '$lib/Login.svelte';
	import MonthDayName from '$lib/MonthDayName.svelte';
import { incrementHex } from './../utils/hexConverter';
import { onMount } from 'svelte';

	// console.log(JSON.stringify($calendarByMonth))

	let monthsToDisplay = 1;
	let innerWidth: number;
	let startingColor = "A0C8D6"
	const colorPalette = [startingColor];
	for (let i = 0; i < 11; i++) {
		startingColor = incrementHex(startingColor, 1000)
		colorPalette.push(startingColor)
	}

	let yearGrid;
	onMount(() => {
		yearGrid.scrollLeft = 3000
	})

</script>

<svelte:window bind:innerWidth/>

<Login />
<input type=range max="12" min="1" bind:value={monthsToDisplay}>

<div class="overflow-container"  bind:this={yearGrid}>
	<div class="year-grid">
		{#each Object.entries($calByMonthStore) as monthAtZero_DaysObjAtOne, i}
			<div class="month-day-name" style="width:{innerWidth / monthsToDisplay}px">
				<MonthDayName calByMonthEntry={monthAtZero_DaysObjAtOne} {monthsToDisplay} {innerWidth} monthColor={colorPalette[i]} />
			</div>
		{/each}
	</div>
</div>

<div>Gimme a Birthday</div>

<ScratchForm />

{#if $bdayBookStore.calendar}
	<div class="calendar-data">
		<p>result</p>
		{#each Object.values($bdayBookStore.calendar) as bday}
			{bday['name']} : {bday['month']}/{bday['day']} <br />
		{/each}
	</div>
{/if}

<style>
	.overflow-container {
		overflow-x: scroll;
	}
	.year-grid {
		display: grid;
		grid-template-columns: repeat(12, auto);
		justify-items: center;
		height: 160px;
		/* border: 1px solid purple; */
	}

	.calendar-data {
		margin: auto;
		width: 50%;
		border: 1px solid green;
	}
</style>

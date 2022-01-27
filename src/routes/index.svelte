<script lang="ts">
	import { bdayBookStore, calByMonthStore } from './../stores';
	import ScratchForm from '$lib/BirthdayForm.svelte';
	import Login from '$lib/Login.svelte';
	import MonthDayName from '$lib/MonthDayName.svelte';
	import { incrementHex } from './../utils/hexConverter';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { Months } from './../models/months';

	// console.log(JSON.stringify($calendarByMonth))

	let monthsToDisplay = 1;
	let innerWidth: number;
	let startingColor = 'A0C8D6';
	const colorPalette = [startingColor];
	for (let i = 0; i < 11; i++) {
		startingColor = incrementHex(startingColor, 1000);
		colorPalette.push(startingColor);
	}
	const currentMonthName = Months[(new Date('3/17').getMonth())+1]
	console.log(`monthName: ${currentMonthName}`)
	onMount(() => {
		document.getElementById(currentMonthName).scrollIntoView()
	});
</script>

<svelte:window bind:innerWidth />

<Login />
<input type="range" max="12" min="1" bind:value={monthsToDisplay} />

<div class="overflow-container" id="of">
	<div class="year-grid">
		{#each Object.entries($calByMonthStore) as monthAtZero_DaysObjAtOne, i}
			<div class="month-day-name" id="{Months[i+1]}" style="width:{innerWidth / monthsToDisplay}px">
				<MonthDayName
					calByMonthEntry={monthAtZero_DaysObjAtOne}
					{monthsToDisplay}
					{innerWidth}
					monthColor={colorPalette[i]}
				/>
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
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		width: 100vw;
		display: flex;
	}
	.month-day-name {
		scroll-snap-align: center;
		scroll-snap-stop: always;
		width: 100%;
		flex: 1 0 auto;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.year-grid {
		display: grid;
		grid-template-columns: repeat(12, auto);
		justify-items: center;
		height: 160px;
	}

	.calendar-data {
		margin: auto;
		width: 50%;
		border: 1px solid green;
	}
</style>

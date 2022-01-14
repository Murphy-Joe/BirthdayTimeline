<script lang="ts">
	import { bdayBookStore, calendarByMonth } from './../stores';
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import ScratchForm from '$lib/BirthdayForm.svelte';
	import Login from '$lib/Login.svelte';

	// console.log(JSON.stringify($calendarByMonth))

	const monthsToDispay = 4;
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<Login />

<div class="calendar-view">
	<MonthRow monthsToDisplay={monthsToDispay} {innerWidth} />
	<DayRow monthsToDisplay={monthsToDispay} {innerWidth} />
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
	.calendar-view {
		overflow-x: scroll;
	}

	.calendar-data {
		margin: auto;
		width: 50%;
		border: 1px solid green;
	}
</style>

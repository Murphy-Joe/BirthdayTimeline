<script context="module">
	export async function load({ fetch }) {
		if (get(emailStore)) {
			// const resp = await fetch(`${variables.baseURL}/calendar/${get(emailStore)}`, {
			// 	headers: { 'X-API-Key': variables.apiKey }
			// });
			// console.log(`resp type: ${typeof resp}`);
			const resp = await loadCalendar(fetch);
			const bb = await resp?.json();
			const cal = bb?.calendar;
			console.log(`res inside load: ${JSON.stringify(cal)}`);
			calendarStore.set(JSON.stringify(cal));
			return {};
		}
		return {};
	}
</script>

<script lang="ts">
	import { get } from 'svelte/store';
	import { birthdayBookStore, calendarStore, emailStore } from './../stores';
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import ScratchForm from '$lib/BirthdayForm.svelte';
	import Login from '$lib/Login.svelte';
	import { loadCalendar } from './../service/detaService';

	const unitsPerYear = 4;
	let innerWidth: number;

	const bbs = $birthdayBookStore;
</script>

<svelte:window bind:innerWidth />

<Login />

<div class="calendar-view">
	<MonthRow {unitsPerYear} {innerWidth} />
	<DayRow {unitsPerYear} {innerWidth} />
</div>

<div>Gimme a Birthday</div>

<ScratchForm />

{#if $birthdayBookStore.calendar}
	<div class="calendar-data">
		<p>result</p>
		{#each Object.values($birthdayBookStore.calendar) as bday}
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

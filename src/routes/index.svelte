<!-- <script context="module">
	export async function load({ fetch }) {
		if (get(bdayBookStore).key != '') {
			const resp = await loadCalendar(fetch);
			const bb = await resp?.json();
			console.log(`bb inside load: ${JSON.stringify(bb)}`);
			bdayBookStore.set(bb);
			return {};
		}
		return {};
	}
</script> -->
<script lang="ts">
	import { get } from 'svelte/store';
	import { bdayBookStore } from './../stores';
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import ScratchForm from '$lib/BirthdayForm.svelte';
	import Login from '$lib/Login.svelte';
	import { loadCalendar } from './../service/detaService';

	const unitsPerYear = 4;
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<Login />

<div class="calendar-view">
	<MonthRow {unitsPerYear} {innerWidth} />
	<DayRow {unitsPerYear} {innerWidth} />
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

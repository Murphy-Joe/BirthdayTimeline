<script context="module">
	export async function load({ fetch }) {
		// if (get(bdayBookStore).key != '') {
		// 	const resp = await loadCalendar(fetch);
		// 	const bb = await resp?.json();
		// 	console.log(`bb inside load: ${JSON.stringify(bb)}`);
		// 	bdayBookStore.set(bb);
		// 	return {};
		// }
		// return {};

		// if no bdayBook in Store, check local storage
		if (browser && get(bdayBookStore).userName == ""){
			// const obj = {
			// 	"key": "test2",
			// 	"userName": "hi ",
			// 	"calendar": {
			// 		"also56": {
			// 			"day": "6",
			// 			"month": "5",
			// 			"name": "also"
			// 		},
			// 		"and56": {
			// 			"day": "6",
			// 			"month": "5",
			// 			"name": "and"
			// 		},
			// 		"ben79": {
			// 			"day": "9",
			// 			"month": "7",
			// 			"name": "ben"
			// 		},
			// 		"ff99": {
			// 			"day": "9",
			// 			"month": "9",
			// 			"name": "ff"
			// 		},
			// 		"ffasdf99": {
			// 			"day": "9",
			// 			"month": "9",
			// 			"name": "ffasdf"
			// 		},
			// 		"here130": {
			// 			"day": "30",
			// 			"month": "1",
			// 			"name": "here"
			// 		},
			// 		"here46": {
			// 			"day": "6",
			// 			"month": "4",
			// 			"name": "here"
			// 		},
			// 		"joannie323": {
			// 			"day": "23",
			// 			"month": "3",
			// 			"name": "joannie"
			// 		},
			// 		"joe211": {
			// 			"day": "11",
			// 			"month": "2",
			// 			"name": "joe"
			// 		},
			// 		"maria108": {
			// 			"day": "8",
			// 			"month": "10",
			// 			"name": "maria"
			// 		},
			// 		"mergeme1111": {
			// 			"day": "11",
			// 			"month": "11",
			// 			"name": "mergeme"
			// 		},
			// 		"mergemeINN1111": {
			// 			"day": "11",
			// 			"month": "11",
			// 			"name": "mergemeINN"
			// 		},
			// 		"mo312": {
			// 			"day": "12",
			// 			"month": "3",
			// 			"name": "mo"
			// 		},
			// 		"mom816": {
			// 			"day": "16",
			// 			"month": "8",
			// 			"name": "mom"
			// 		},
			// 		"onemore77": {
			// 			"day": "7",
			// 			"month": "7",
			// 			"name": "onemore"
			// 		},
			// 		"onemore88": {
			// 			"day": "7",
			// 			"month": "7",
			// 			"name": "onemore"
			// 		}
			// 	}
			// }
			// localStorage.setItem("bdayBook", JSON.stringify(obj))
			// console.log(localStorage.getItem("bdayBook"))
			// console.log(JSON.parse(localStorage.getItem("bdayBook")))
			if (localStorage.getItem("bdayBook")){
				const bb = JSON.parse(localStorage.getItem("bdayBook"))
				// console.log(JSON.stringify(bb))
				bdayBookStore.set(bb)
			}
		}
		return {}
	}
</script>
<script lang="ts">
	import { bdayBookStore } from './../stores';
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import ScratchForm from '$lib/BirthdayForm.svelte';
	import Login from '$lib/Login.svelte';
	import { browser } from '$app/env';
import { get } from 'svelte/store';

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

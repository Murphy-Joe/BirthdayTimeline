<script lang="ts">
	import BirthdayForm from '$lib/BirthdayForm.svelte';
	import DayRow from '$lib/DayRow.svelte';
	import DetaGetTest from '$lib/DetaGetTest.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	// import { getsomething } from './../service/detaService';

	const unitsPerYear = 4;
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="calendar-view">
	<MonthRow {unitsPerYear} {innerWidth} />
	<DayRow {unitsPerYear} {innerWidth} />
</div>

<div>Gimme a Birthday</div>

<BirthdayForm />

<!-- {#await getsomething() then value}
	<p>the value is {value}</p>
{/await} -->

<DetaGetTest />

<style>
	.calendar-view {
		overflow-x: scroll;
	}
</style>

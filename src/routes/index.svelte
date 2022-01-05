<script lang="ts">
	import BirthdayForm from '$lib/BirthdayForm.svelte';
	import DayRow from '$lib/DayRow.svelte';
	import MonthRow from '$lib/MonthRow.svelte';
	import ScratchForm from '$lib/scratchForm.svelte';
	import { getsomething } from '$service/detaService';

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
<ScratchForm />

{#await getsomething() then value}
	<p>the value is {value.data}</p>
{/await}

<style>
	.calendar-view {
		overflow-x: scroll;
	}
</style>

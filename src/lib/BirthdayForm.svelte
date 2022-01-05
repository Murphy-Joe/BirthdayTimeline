<script lang="ts">
	import { createBirthdayRecord } from '$service/detaService';

	import { Months, MonthsList } from '$models/months';
	import { calendarByMonth } from '$stores';

	let selectedMonthValue: number;
	let selectedDay: number;
	let bdayName: string;

	$: selectedMonthName = Months[selectedMonthValue] || 'January';
	$: daysInSelectedMonth = Object.keys($calendarByMonth[selectedMonthName]).filter((prop) =>
		Number(prop)
	);

	async function handleSubmit() {
		// alert(`picked ${selectedMonthName} ${selectedDay}`);
		const resp = await createBirthdayRecord(bdayName, selectedMonthValue, selectedDay);
		console.log(resp.data);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={bdayName} placeholder="Name" />
	<select bind:value={selectedMonthValue}>
		{#each MonthsList as month}
			<option value={Months[month]}>
				{month.substring(0, 3)}
			</option>
		{/each}
	</select>

	<select bind:value={selectedDay}>
		{#each daysInSelectedMonth as day}
			<option value={day}>
				{day}
			</option>
		{/each}
	</select>
	<button type="submit"> Submit </button>
</form>

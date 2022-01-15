<script lang="ts">
	import { DateConverter } from './../utils/dateConverter';

	import { bdayBookStore, calendarByDay } from './../stores';

	let name: string;
	let mo: number;
	let day: number;

	async function addBirthdays() {
		const bdayObj = { name: name, month: mo, day: day };
		// udpate the store, let the store update the database
		bdayBookStore.update((bb) => {
			bb.calendar[`${name}${mo}${day}`] = bdayObj;
			return bb;
		});
		// console.log(`bday bookstore after bday form submit: ${JSON.stringify($bdayBookStore)}`);
		calendarByDay.update((cal) => {
			const dayOfYear = DateConverter.DayOfYear(mo.toString(), day.toString());
			cal[dayOfYear] = [...cal[dayOfYear], bdayObj];
			// console.log(`calbyDay after form submit ${JSON.stringify(get(calendarByDay))}`)
			return cal;
		});
	}
</script>

<form on:submit|preventDefault={addBirthdays}>
	<input bind:value={name} class="name" placeholder="Name" />
	<input bind:value={mo} class="date" placeholder="mo" />
	<input bind:value={day} class="date" placeholder="day" />

	<button type="submit"> Submit </button>
</form>

<style>
	input {
		border: none;
		border-left: 0.2em solid blue;
		border-radius: 2px;

		background-color: rgb(192, 214, 214);
	}

	input:focus {
		border: none;
		background-color: yellow;
	}

	.date {
		width: 2em;
	}

	.name {
		width: 8em;
	}
</style>

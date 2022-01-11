<script lang="ts">
import { get } from 'svelte/store';

	import { bdayBookStore } from './../stores';

	let name: string;
	let mo: number;
	let day: number;

	async function addBirthdays() {
		// udpate the store, let the store update the database
		bdayBookStore.update((bb) => {
			bb.calendar[`${name}${mo}${day}`] = { name: name, month: mo, day: day };
			return bb;
		});
		console.log(`bday bookstore after bday form submit: ${JSON.stringify($bdayBookStore)}`);
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

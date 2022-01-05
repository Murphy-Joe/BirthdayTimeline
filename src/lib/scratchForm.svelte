<script lang="ts">
	let name: string;
	let mo: string;
	let day: string;

	async function handleSubmit() {
		alert(`picked ${mo} ${day}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
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

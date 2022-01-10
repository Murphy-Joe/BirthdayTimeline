<script lang="ts">
	import { createBase, getCalendar, UpdateCalendar } from './../service/detaService';

	import { emailStore, nameStore, birthdayBookStore } from './../stores';

	let name: string;
	let email: string;
	$: isEmailInStore = $emailStore != '';

	async function login() {
		emailStore.set(email);
		nameStore.set(name);
		await createBase($birthdayBookStore);
		await UpdateCalendar($birthdayBookStore);
		await getCalendar();
	}

	async function logout() {
		name = '';
		email = '';
		emailStore.set(email);
		nameStore.set(name);
	}
</script>

{#if isEmailInStore}
	hello {$nameStore}
	{$emailStore}
	<button on:click={logout}>Logout</button>
{:else}
	<form on:submit|preventDefault={login}>
		<input bind:value={name} class="login" placeholder="name" />
		<input bind:value={email} class="login" placeholder="email" />
		<button type="submit"> Login </button>
	</form>
{/if}

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

	.login {
		width: 8em;
	}
</style>

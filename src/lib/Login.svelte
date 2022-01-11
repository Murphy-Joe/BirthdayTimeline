<script lang="ts">
	import { LoginStoreAndDatabaseActions } from './../utils/loginCalls';
	import { bdayBookStore } from './../stores';

	let name: string;
	let email: string;

	async function login() {
		LoginStoreAndDatabaseActions(name, email)
	}

	async function logout() {
		name = '';
		email = '';
		bdayBookStore.set({ key: email, userName: name, calendar: {} });
	}
</script>

{#if $bdayBookStore.key}
	hello {$bdayBookStore.userName}
	{$bdayBookStore.key}
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

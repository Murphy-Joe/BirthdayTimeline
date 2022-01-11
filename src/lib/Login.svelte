<script lang="ts">
import { get } from 'svelte/store';

	import { createBase, getCalendar, UpdateCalendar } from './../service/detaService';
	import { bdayBookStore } from './../stores';

	let name: string;
	let email: string;

	async function login() {
		// console.log(`prior to log cal: ${JSON.stringify(get(bdayBookStore).calendar)}`)
		bdayBookStore.set({ key: email, userName: name, calendar: get(bdayBookStore).calendar });
		const calResp = await getCalendar();
		// console.log(`calResp data: ${JSON.stringify(calResp.data)}`)
		// console.log(`calResp status: ${calResp.statusText}`);
		// console.log(`calendar length: ${Object.keys(get(bdayBookStore).calendar).length}`);
		// console.log(`calendar populated: ${Object.keys(get(bdayBookStore).calendar).length != 0}`);	
		if (calResp.data) {
			const emptyCalendar = Object.keys(get(bdayBookStore).calendar).length == 0
			if (emptyCalendar){
				// console.log(`calResp data in status Ok block: ${JSON.stringify(calResp.data)}`)
				bdayBookStore.set({ key: email, userName: name, calendar: calResp.data })
			}
			else {
				UpdateCalendar();
				// console.log(`updateResp data: ${updateResp.data}`);	
				// console.log(`store cal ${JSON.stringify(get(bdayBookStore).calendar)}`)
				// console.log(`resp data cal ${JSON.stringify(calResp.data.calendar)}`)
				// console.log(`merged cal ${JSON.stringify(Object.assign(get(bdayBookStore).calendar, calResp.data.calendar))}`)
				const mergedCal = Object.assign(get(bdayBookStore).calendar, calResp.data.calendar)
				bdayBookStore.set({ key: email, userName: name, calendar: mergedCal })
			}
		}
		else {
			createBase();
		}
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

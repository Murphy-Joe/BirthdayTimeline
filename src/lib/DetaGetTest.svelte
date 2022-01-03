<script lang="ts">
	import { getsomething } from './../service/detaService';

	import { onMount } from 'svelte';

	let response;
	onMount(async () => {
		const resp = await getsomething();
		console.log('resp ' + resp);
		response = resp;
	});
</script>

{response}

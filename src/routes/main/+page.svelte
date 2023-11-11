<script>
	import { goto } from '$app/navigation';
	import { enterGate } from '$lib';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		if (!enterGate()) {
			goto(base + '/');
		}
	});

	function logout() {
		localStorage.clear();
		goto(base + '/');
	}
</script>

<p>main</p>
<button class="bg-tertiary p-1 rounded-lg" on:click={logout}>Logout</button>

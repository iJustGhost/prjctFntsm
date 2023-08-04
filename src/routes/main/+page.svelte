<script>
	import { goto } from '$app/navigation';
	import { enterGate } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
        if (!enterGate()) {
			goto('/');
		}
    })

    function logout() {
        localStorage.clear()
        goto('/')
    }
</script>

<p>main</p>
<button class="bg-tertiary p-1 rounded-lg" on:click={logout}>Logout</button>
<script lang="ts">
	import { goto } from '$app/navigation';
	import { enterGate } from '$lib';
	import image from '$lib/assets/ghostImage.png';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let showDialogue = false;
	let Key: string;
	

	const setDialogue = () => {
		showDialogue = !showDialogue;
	};
	const handleEnter = () => {
		localStorage.setItem('current', Key);
		if (enterGate()) {
			goto(base + '/main');
		}
	};
	const textSubmit = (event: any) => {
		if (event.key === 'Enter') {
			localStorage.setItem('current', Key);
			if (enterGate()) {
				goto(base + '/main');
			}
		}
	};
	onMount(() => {
		if (localStorage.getItem('current') === null) {
			localStorage.setItem('current', '');
		} else {
			if (enterGate()) {
				goto(base + '/main');
			}
		}
	});
</script>

<div
	class="absolute max-sm:w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col justify-center items-center"
>
	<img src={image} alt="" />
	<p class="m-5 max-sm:text-sm sm:text-xl">
		In the still of night, a figure roams
		<br />
		Invisible to all, yet not alone
		<br />
		With secrets buried deep within
		<br />
		And a love that lingers, unfulfilled.
		<br />
		<br />
		The{' '}
		<span class="cursor-pointer"><button on:click={setDialogue}>spectral dream</button></span>{' '}
		that haunts this being
		<br />
		Is one of love, and of a life once seen
		<br />
		But now forever out of reach
		<br />
		This lonely soul wanders, without speech.
	</p>
	<div class="flex items-center w-full">
		<input
			class="text-foreground text-2xl bg-transparent border-2 rounded-full w-full h-10 pl-2 outline-none"
			type="password"
			bind:value={Key}
			on:keypress={textSubmit}
		/>
		<button
			class="text-3xl m-2 px-4 py-1 rounded-full hover:bg-secondary bg-tertiary"
			on:click={handleEnter}
		>
			Enter
		</button>
	</div>
</div>

{#if showDialogue}
	<div
		class="spectral-dream absolute bg-background border-secondary border-2 p-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full sm:w-full sm:text-sm lg:w-1/2 lg:text-lg"
	>
		<p class="close-button absolute right-2 top-2"><button on:click={setDialogue}>X</button></p>
		<p>
			A spectral dream is a type of dream or vision that is often associated with ghostly or
			supernatural phenomena. It is a dream that seems to transcend the boundaries of reality, and
			is often accompanied by strange or eerie sensations. In some cases, a spectral dream may
			involve a visitation from a deceased loved one or a ghostly apparition. These dreams may be
			comforting for some, but for others they can be unsettling or even terrifying. Spectral dreams
			can also be associated with feelings of longing or nostalgia, as they often involve memories
			or emotions that are tied to the past. They may also be linked to unresolved issues or
			unresolved emotions, and can serve as a way of processing these feelings in a symbolic or
			metaphorical way. Overall, spectral dreams are a fascinating and mysterious phenomenon that
			have captured the imagination of people for centuries. Whether they are the result of
			supernatural forces or simply a product of the human imagination, they continue to intrigue
			and inspire us with their haunting beauty and elusive nature.
		</p>
	</div>
{/if}

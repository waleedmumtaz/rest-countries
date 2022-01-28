<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleInput = (e) => {
		dispatch('search', e.target.value);
	};
</script>

<form on:submit|preventDefault class="shadow-sm my-8 relative">
	<img src="/icon-search.svg" alt="search icon" class="absolute top-4 left-7" />
	<input
		type="text"
		name="country"
		on:input={handleInput}
		placeholder="Search for a country..."
		class="pl-16 py-4 w-full rounded-lg focus:outline-none"
	/>
</form>

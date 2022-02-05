<script>
	import { createEventDispatcher } from 'svelte';
	import IconSearch from './IconSearch.svelte';

	const dispatch = createEventDispatcher();

	const handleInput = (e) => {
		dispatch('search', e.target.value);
	};
</script>

<form on:submit|preventDefault class="shadow-sm my-8 relative sm:w-1/3">
	<div class="absolute top-4 left-7">
		<IconSearch fillColor="gray" />
	</div>
	<input
		type="text"
		name="country"
		on:input={handleInput}
		placeholder="Search for a country..."
		class="pl-16 py-4 w-full rounded-lg focus:outline-none dark:bg-slate-800 dark:text-slate-200"
	/>
</form>

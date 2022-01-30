<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleChange = (e) => {
		dispatch('filter', e.target.value);
	};
</script>

<form on:submit|preventDefault class="shadow-sm mb-8 sm:mb-0 flex items-center w-fit relative">
	<label for="regions" />
	<select
		on:change={handleChange}
		name="regions"
		id="regions"
		class="appearance-none pl-8 pr-16 py-4 rounded-lg focus:outline-none w-fit"
	>
		<option selected disabled hidden>Filter by Region</option>
		<option value="Africa">Africa</option>
		<option value="Americas">Americas</option>
		<option value="Asia">Asia</option>
		<option value="Europe">Europe</option>
		<option value="Oceania">Oceania</option>
	</select>
	<img src="/icon-arrow-expand.svg" alt="expand arrow" class="absolute right-2" />
</form>

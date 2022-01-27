<form on:submit|preventDefault class="shadow-sm mb-8 flex items-center w-fit relative">
	<label for="regions" />
	<select
		name="regions"
		id="regions"
		class="appearance-none pl-8 pr-16 py-4 rounded-lg focus:outline-none w-fit"
	>
		<option selected disabled hidden>Filter by Region</option>
		<option value="Africa">Africa</option>
		<option value="America">America</option>
		<option value="Asia">Asia</option>
		<option value="Europe">Europe</option>
		<option value="Oceania">Oceania</option>
	</select>
	<img src="/icon-arrow-expand.svg" alt="expand arrow" class="absolute right-2" />
</form>

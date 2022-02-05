<script>
	import IconDarkLightMode from './IconDarkLightMode.svelte';

	export let dark;
</script>

<header>
	<nav class="px-5 py-8 font-nunito-sans shadow-md dark:bg-slate-800 dark:text-slate-200">
		<div class="flex justify-between items-center sm:container sm:mx-auto">
			<h1 class="font-extrabold sm:text-2xl"><a href="/">Where in the world?</a></h1>
			<button
				on:click|preventDefault={() => {
					dark = !dark;
				}}
				class="flex items-center gap-2"
			>
				<IconDarkLightMode fillColor="gray" />
				<p class="font-semibold">{dark ? 'Light mode' : 'Dark mode'}</p>
			</button>
		</div>
	</nav>
</header>

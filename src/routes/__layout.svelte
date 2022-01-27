<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
		rel="stylesheet"
	/>
	<title>REST Countries</title>
</svelte:head>

<Header />
<slot />

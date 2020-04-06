<script>
	import Navbar from "./Navbar.svelte";
</script>

<header class="bg-dark-overrided">
	<section class="container">
		<Navbar />
	</section>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;
		border-bottom: 1px solid var(--color-yellow-middle);
		z-index: 1;
	}
</style>
<script>
	import { sitename, navbarItems } from "../stores.js";
	import { fade } from "svelte/transition";
	import NavItem from "./NavItem.svelte";

	let isNavbarVisible = false;

	const handleClickMenuToggler = () => isNavbarVisible = !isNavbarVisible;
</script>

<nav class="navbar navbar-dark">
	<a class="navbar-brand" href="/">{$sitename}</a>
	
	<button class="navbar-toggler" type="button"
		data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="{isNavbarVisible}"
		aria-label="Toggle navigation"
		on:click={handleClickMenuToggler}
	>
		<span class="navbar-toggler-icon"></span>
	</button>
	
	{#if isNavbarVisible}
		<div class="collapse navbar-collapse show" id="navbarSupportedContent" in:fade>
			<ul class="navbar-nav mr-auto">
				{#each $navbarItems as item (item.link)}
					<NavItem {...item} />
				{/each}
			</ul>
		</div>
	{/if}
</nav>
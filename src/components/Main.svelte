<script>
	import { socials } from "../stores.js";

	import SocialCard from "./SocialCard.svelte";
</script>

<main class="container">
	<section class="card-deck">
		{#each $socials as socialItem (socialItem.id)}
			<SocialCard {...socialItem} />
		{/each}
	</section>
</main>

<style>
	.container {
		padding-top: 30px;
		padding-bottom: 30px;
	}
</style>
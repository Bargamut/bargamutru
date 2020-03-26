<script>
	import { sitename } from "../stores.js";

	function handleClickMenuToggler(e) {
		const nodeTarget = e.target,
					nodeNavbarContent = document.querySelector(nodeTarget.closest('.navbar-toggler').dataset.target);

		nodeNavbarContent.classList.toggle('show');
	}
</script>

<header class="bg-dark">
	<section class="container">
		<nav class="navbar navbar-dark">
			<a class="navbar-brand" href="/">{$sitename}</a>
			
			<button class="navbar-toggler" type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				on:click={handleClickMenuToggler}
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="/">Home <span class="sr-only">current</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://ancientlores.com/" tabindex="-1">Ancient Lores</a>
					</li>
				</ul>
			</div>
		</nav>
	</section>
</header>
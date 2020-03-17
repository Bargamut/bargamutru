const $appContainer = document.querySelector(`.app`);

$appContainer.innerHTML = `
	<header class="bg-dark">
		<section class="container">
			<nav class="navbar navbar-dark">
				<a class="navbar-brand" href="/">Bargamut</a>
				
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="/">Home <span class="sr-only">current</span></a>
						</li>
						<li class="nav-item active">
							<a class="nav-link disabled" href="https://ancientlores.ru/" tabindex="-1" aria-disabled="true">Ancient Lores</a>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	</header>

	<main class="container">
		<section class="card-deck">
			<section class="card vk">
				<img src="/assets/decor/logos/vk.png" alt="VK logo" class="card-img">

				<div class="card-body">
					<h5 class="card-title">ВКонтакте</h5>
					<p class="card-text">Здесь меня можно найти во ВКонтакте</p>
					
					<a href="https://vk.bargamut.ru/" class="btn btn-block btn-primary">Найти</a>
				</div>
			</section>

			<section class="card fb">
				<img src="/assets/decor/logos/fb.jpg" alt="Facebook logo" class="card-img">

				<div class="card-body">
					<h5 class="card-title">Facebook</h5>
					<p class="card-text">Здесь меня можно найти в Facebook</p>
					
					<a href="https://fb.bargamut.ru/" class="btn btn-block btn-primary">Найти</a>
				</div>
			</section>

			<section class="card instagram">
				<img src="/assets/decor/logos/instagram.svg" alt="Instagram logo" class="card-img">

				<div class="card-body">
					<h5 class="card-title">Instagram</h5>
					<p class="card-text">Здесь меня можно найти в Instagram</p>

					<a href="https://instagram.bargamut.ru/" class="btn btn-block btn-primary">Найти</a>
				</div>
			</section>
			
			<section class="card tw">
				<img src="/assets/decor/logos/twitter.svg" alt="Twitter logo" class="card-img">

				<div class="card-body">
					<h5 class="card-title">Twitter</h5>
					<p class="card-text">Здесь меня можно найти в Twitter</p>

					<a href="https://twitter.com/bargamut" class="btn btn-block btn-primary">Найти</a>
				</div>
			</section>
		</section>
	</main>
	
	<footer>
		<section class="container text-muted">
			&copy; 2020 Paul "Bargamut" Petrov. All rights reserved.
		</section>
	</footer>`;
<script>
	export let id;
	export let img;
	export let body;
</script>

<section class="card {id}">
	<img src="{img.src}" alt="{img.alt}" class="card-img">

	<div class="card-body">
		<h5 class="card-title">{body.title}</h5>
		<p class="card-text">{body.text}</p>
		
		<a href="{body.link.href}" class="btn btn-block btn-primary">{body.link.caption}</a>
	</div>
</section>
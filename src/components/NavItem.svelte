<script>
	export let isActive;
	export let caption;
	export let link;
</script>

<li class="nav-item {isActive && 'active' || ''}">
	<a class="nav-link" href="{link}">
		{caption} 
		{#if isActive}
			<span class="sr-only">current</span>
		{/if}
	</a>
</li>
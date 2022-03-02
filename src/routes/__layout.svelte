<script>
	import '../app.css';
	//biuold the nav links from page
	export let links = [
		{
			href: '/',
			label: 'Welcome'
		},
		{
			href: '/projects',
			label: 'projects'
		},
		{
			href: '/blog',
			label: 'blog'
		},
	]
</script>

<main>
	<header>
		<nav>
			<ul>
				{#each links as {href,label}}
					<li>
						<a href={href}>{label}</a>
					</li>
				{/each}
			</ul>	
		</nav>
	</header>
	</main>
<slot />

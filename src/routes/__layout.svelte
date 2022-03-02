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
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Blog</a>
		</nav>
	</header>
	<slot />
</main>

<style>
	a {
		margin: 1rem;
		font-weight: 700;
		font-size: 24px;
		text-decoration: none;
		transition: text-decoration 2s;
		transition: color .5s;
	}
	a:hover {
		color: rgb(218, 117, 59);
		text-decoration: underline;
	}
	main {
		padding: 1.75rem;
	}
</style>
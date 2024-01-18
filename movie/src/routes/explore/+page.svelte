<script>
	import PopularMovies from '../../components/PopularMovies.svelte';
	export let data;
	export let movies = data.popular;
</script>

<section>
	<PopularMovies {movies}/>
</section>

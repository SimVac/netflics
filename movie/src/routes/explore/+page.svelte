<script>
	import PopularMovies from '$lib/components/PopularMovies.svelte';
	import SearchMovie from '../../lib/components/SearchMovie.svelte';
	export let data;
	export let movies = data.popular;
</script>

<section>
	<SearchMovie />
	<PopularMovies {movies}/>
</section>

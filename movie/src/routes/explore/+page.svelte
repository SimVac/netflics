<script>
	import PopularMovies from '$lib/components/PopularMovies.svelte';
	import SearchMovie from '../../lib/components/SearchMovie.svelte';
	import {fly} from "svelte/transition"
	export let data;
	export let movies = data.popular;
</script>

<section in:fly={{y: 50, duration:500, delay: 500}} out:fly={{y: 0, duration:500}}>
	<SearchMovie />
	<PopularMovies {movies}/>
</section>

<style>
	:global(body){
		background: #fff;
	}
</style>
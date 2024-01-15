<script context="module">
	import {onMount} from "svelte";

	const url =
		'https://api.themoviedb.org/3/movie/popular?api_key=&language=it';



	export const get_data = async() =>{
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
		return data.results;
	};

</script>

<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	export let popular = [];
	onMount( async() => {
		popular = await get_data();
		console.log(typeof popular)
	})
</script>

<section>
	<PopularMovies bind:movies={ popular }/>
</section>

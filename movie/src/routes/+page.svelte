<script context="module">
	
	export async function load ({fetch}){
		console.log("ciao")
		const res = await fetch (
			`https://api.themoviedb.org/3/movie/popular?api_key=80390a3069aa4ba033c8010d672709bc&language=en-US&page=1`
		);
		const data = await res.json();
		console.log(data)
		if (res.ok){
			return{
				props : {popular: data.results}
			}
		}
	}
	load();
	
	/*const url =
		'https://api.themoviedb.org/3/movie/popular?api_key=80390a3069aa4ba033c8010d672709bc&language=en-US&page=1';

	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			porps: {popular : json};
		})
		.catch((err) => console.error('error:' + err));*/

</script>

<script>
	import PopularMovies from './components/PopularMovies.svelte';
	export let popular = [];
	console.log(popular)
</script>

<section>
	<PopularMovies movies={popular} />
</section>

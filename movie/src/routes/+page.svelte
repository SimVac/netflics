<script context="module">
	import {onMount} from "svelte";
	// export async function load ({fetch}){
	// 	console.log("ciao")
	// 	const res = await fetch (
	// 		`https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1`
	// 	);
	// 	const data = await res.json();
	// 	console.log(data)
	// 	if (res.ok){
	// 		return data.results
	// 	}
	// }
	// load().then((res) => {props: {popular: res}});

	const url =
		'https://api.themoviedb.org/3/movie/popular?api_key=&language=it';

	// let info;
	// export async function load (){
	// 	fetch(url)
	// 	.then((res) => res.json())
	// 	.then((json) => {
	// 		console.log(json);
	// 		info = json;
	// 	})
	// 	.catch((err) => console.error('error:' + err));
	// 	return{
	// 		props: {popular: info}
	// 	}
	// }

	// export async function load({ fetch }) {
	// 	const res = await fetch(url);
	// 	const item = await res.json();

	// 	console.log(item)
	// 	return { item };
	// }

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

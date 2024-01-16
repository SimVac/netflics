<script context="module">
	/** @type {import('./$types').PageLoad} */
	// export async function load({fetch}) {
	//     const apiUrl = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=80390a3069aa4ba033c8010d672709bc&lang=it';
	//     const res = await fetch(apiUrl);
	// 	const movieDetails = await res.json();
	// 	console.log(movieDetails);
	// 	return {
	//         props: {movieDetails}
	//     };
	// }

	export async function load({ url }) {
		let id = url.searchParams.get('id');
        console.log(id)
		return { id };
	}

    const get_datails = (async(id) => {
        const apiUrl = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=80390a3069aa4ba033c8010d672709bc&lang=it';
	    const res = await fetch(apiUrl);
		const movieDetails = await res.json();
		console.log(typeof movieDetails);
		return {
	       movieDetails: movieDetails
        };
    })

</script>

<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    console.log($page.url.searchParams.get('id'))
	export let movieDetails;
    onMount(async()=>{
        movieDetails = await get_datails($page.url.searchParams.get('id'));
        console.log(movieDetails)
    })
	console.log({movieDetails});
</script>

<div class="movie-details">
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetails.backdrop_path}
			alt={movieDetails.title}
		/>
	</div>
</div>

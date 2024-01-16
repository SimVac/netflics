<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte';

    const url = $page.url;
    const id = url.searchParams.get('id')
    console.log(id);

    const apiUrl = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=&lang=it';

    const get_data = async() =>{
		const res = await fetch(apiUrl);
		const data = await res.json();
		console.log(data);
        return data;
	};

    export let movieDetails;
    get_data().then((res)=> {movieDetails = res});
    console.log(movieDetails)

</script>

<div class="movie-details">
    <div class="img-container">
        <img src={'https://image.tmdb.org/t/p/original' + movieDetails.backdrop_path} alt="{movieDetails.title}" />
    </div>
</div>
<script>
    import MovieCard from '$lib/components/MovieCard.svelte';
    import {fly} from "svelte/transition"
    export let data;
    export let movies = data.movies;
</script>

<div in:fly={{y: 50, duration:500, delay: 500}} out:fly={{y: 0, duration:500}}>
    <h1>Your watchlist</h1>
    <span>{movies.length} elements</span>

    <div class="cont" >
        {#each movies as movie}
            <MovieCard {movie}/>
        {/each}
    </div>
</div>
<style>
    .cont{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>
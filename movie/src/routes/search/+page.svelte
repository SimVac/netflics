<script>
    import MovieCard from "$lib/components/MovieCard.svelte"
    export let data;
    console.log(data)
    export let searchedMovie = data.searchedMovie
</script>

<div class="searched-movie">

    {#each searchedMovie.movieDetails.results as movie}
        <MovieCard {movie} />   
    {/each}

</div>

<style>
    .searched-movie{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>
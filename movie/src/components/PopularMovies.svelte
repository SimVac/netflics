<script>
    export let movies;
    // setTimeout(() => {console.log("movie" + popular[0])}, 4000)
    console.log("movie " + movies)
</script>

<h3>Popular Movies: </h3>

<div class="popular-movies">
    {#each movies as movie}
        <h1>{movie.title}</h1>
    {/each}
</div>
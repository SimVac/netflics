<script>
    export let details;
	export let path = 'https://image.tmdb.org/t/p/original';
	path = path.concat(details.backdrop_path);
	console.log(details)
</script>

<div class="movie-details">
	<div class="img-container">
		<img
			src={path}
			alt={details.title}
		/>
	</div>
	<div class="text-container">
		<h1>{details.title}</h1>
		<p>{details.overview}</p>
		<p>
			<span>Relase Date:</span> {details.release_date} <br>
			<span>Genres: </span>
				{#each details.genres as genre}
					{genre.name}
				{/each}
			 <br>
			<span>Rating:</span> {details.vote_average} <br>
			<span>Runtime:</span> {details.runtime} min <br>
			<span><a href={details.homepage} target="_blank">Watch it now </a></span>
		</p>
	</div>
</div>

<style>
	h1{
		padding: 1rem 0rem 2rem;
	}
	p{
		padding: 1rem 0rem;
	}
	.img-container{
		width: 100%;
	}
	img{
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details{
		margin: 2rem 20%;
	}
	span{
		font-weight: bold;
	}
</style>
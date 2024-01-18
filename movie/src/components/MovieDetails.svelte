<script>
    export let details;
	export let path = 'https://image.tmdb.org/t/p/original';
	path = path.concat(details.backdrop_path);
</script>

<div class="movie-details">
	<div class="img-container">
		<img
			src={path}
			alt={details.title}
		/>
	</div>
</div>
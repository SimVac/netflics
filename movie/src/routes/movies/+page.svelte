<script>
	import MovieDetails from '$lib/components/MovieDetails.svelte';
	export let data;
	export const details = data.details.movieDetails;
</script>

<section>
	<MovieDetails {details}/>
</section>

<script>
	import MovieDetails from '../../components/MovieDetails.svelte';
	export let data;
	export const details = data.details.movieDetails;
</script>

<section>
	<MovieDetails {details}/>
</section>

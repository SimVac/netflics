<script>
	import {fly} from "svelte/transition"
    export let details;
	export let path = 'https://image.tmdb.org/t/p/original';
	path = path.concat(details.backdrop_path);
	console.log(details)
	export let aggiunto = (JSON.parse(localStorage.watchlist || "[]") || []).includes(details.id);

	function rimuovi(){
		let watchlist = JSON.parse(localStorage.watchlist || "[]") || [];
		watchlist = watchlist.filter(element => element !== details.id);
		localStorage.watchlist = JSON.stringify(watchlist)
		aggiunto = false;
	}

	function aggiungi(){
		let watchlist = JSON.parse(localStorage.watchlist || "[]") || [];
		if (!watchlist.includes(details.id))
			watchlist.push(details.id);
		localStorage.watchlist = JSON.stringify(watchlist)
		aggiunto = true;
	}

</script>

<div class="movie-details" in:fly={{y: 50, duration:500, delay: 500}} out:fly={{y: 0, duration:500}}>
	<div class="img-container">
		<img
			src={path}
			alt={details.title}
		/>
	</div>
	<div class="text-container">
		<div class="title">
			<h1>{details.title}</h1>
			{#if !aggiunto}
				<button class="icon" on:click={aggiungi}>Add</button>
				{:else}
					<button class="icon" on:click={rimuovi}>Remove</button>
			{/if}
			
		</div>
		<p>{details.overview}</p>
		<p>
			<span>Relase Date:</span> {details.release_date} <br>
			<span>Genres: </span>
				{#each details.genres as genre}
					{genre.name + " "}
				{/each}
			 <br>
			<span>Rating:</span> {details.vote_average} <br>
			<span>Runtime:</span> {details.runtime} min <br>
			<span><a href={details.homepage} target="_blank">Watch it now </a></span>
		</p>
	</div>
</div>

<style>
	.title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.icon{
		height: 5vh;
		width: 5vw;
		font-style: bold;
		margin: 1rem 0rem 2rem;
		color: rgb(255, 255, 255);
		background-color: transparent;
		border-style: none;
		border-radius: 10px;
		cursor: pointer;
	}
	.icon:hover{
		color: #000;
		background-color: rgb(255, 255, 255);
	}
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
import { API_KEY } from '$lib/env';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${url.searchParams.get('searched')}`;
    const res = await fetch(apiUrl);
    const movieDetails = await res.json();
    return json(movieDetails);
}
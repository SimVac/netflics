import { API_KEY } from '$lib/env';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const apiUrl = `https://api.themoviedb.org/3/movie/${url.searchParams.get('id')}?api_key=${API_KEY}&lang=it`;
    const res = await fetch(apiUrl);
    const movieDetails = await res.json();
    return json(movieDetails);
}
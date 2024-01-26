import { API_KEY } from '$lib/env';

export async function load({ url }) {
    const urlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&lang=it`;
    const popular = await get_data(urlAPI);
    return { popular };
}

async function get_data (url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
};
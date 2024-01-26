import { API_KEY } from '$lib/env';

export async function load({ fetch, url }) {
    const popular = await get_data(fetch, '/api/popular');
    return { popular };
}

async function get_data (fetch, url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
};
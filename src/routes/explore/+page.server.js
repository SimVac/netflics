import { API_KEY } from '$lib/env';

export async function load({ url }) {
    const popular = await get_data('/api/popular');
    return { popular };
}

async function get_data (url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
};
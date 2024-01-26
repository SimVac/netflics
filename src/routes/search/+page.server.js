import { API_KEY } from '$lib/env';

const get_details = (async(searched) => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searched}`;
    const res = await fetch(apiUrl);
    const movieDetails = await res.json();
    return { movieDetails };
})

export async function load({ url }) {
    let searched = url.searchParams.get('q');
    console.log(searched);
    let searchedMovie = await get_details(searched);
    console.log(searchedMovie);
    return {searchedMovie};
}
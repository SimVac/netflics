import { browser } from '$app/environment';

const get_details = (async(id) => {
    const res = await fetch('/api/movie?' + new URLSearchParams({id}))
    return await res.json();
})


export async function load(){
    let watchlist = [];
    if (browser)
        watchlist = JSON.parse(localStorage.watchlist || "[]") || [];
    console.log(watchlist)
    let movies = [];
    for (let id of watchlist)
        movies.push((await get_details(id)))
    console.log(movies)
    return { movies };
}
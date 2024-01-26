const get_details = (async(fetch, id) => {
    const res = await fetch('/api/movie?' + new URLSearchParams({id}));
    const movieDetails = await res.json();
    return { movieDetails };
})

export async function load({ fetch, url }) {
    let id = url.searchParams.get('id');
    let details = await get_details(fetch, id);
    return {details};
}
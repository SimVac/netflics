const get_details = (async(id) => {
    const res = await fetch('/api/movie?' + new URLSearchParams({id}));
    const movieDetails = await res.json();
    return { movieDetails };
})

export async function load({ url }) {
    let id = url.searchParams.get('id');
    let details = await get_details(id);
    return {details};
}
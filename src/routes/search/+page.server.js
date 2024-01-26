const get_details = (async(searched) => {
    const res = await fetch('/api/search?' + new URLSearchParams({searched}));
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
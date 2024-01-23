const get_details = (async(id) => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=80390a3069aa4ba033c8010d672709bc&lang=it';
    const res = await fetch(apiUrl);
    const movieDetails = await res.json();
    return { movieDetails };
})

export async function load({ url }) {
    let id = url.searchParams.get('id');
    let details = await get_details(id);
    return {details};
}
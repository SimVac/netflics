export const prerender = true;
export async function load({ url }) {
    const urlAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=80390a3069aa4ba033c8010d672709bc&language=it';
    const popular = await get_data(urlAPI);
    return { popular };
}

async function get_data (url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
};
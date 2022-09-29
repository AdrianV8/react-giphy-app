/**
 * @param {*} categoria     Categoria para buscar
 * @return {*}      id, title, url del gif
 */
 export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ci9Boi1SVBlYAOu7VvVfc3d88CSJnoeY&q=${categoria}&limit=9`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;
}
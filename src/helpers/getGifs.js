const apikey = 'S76RYNRVFp7xVK8LNXihdEkVypoH7Iil';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}`;

export const fetchGifs = async (category) => {
    const response = await fetch(`${url}&q=${encodeURIComponent(category)}&limit=10`);
    const { data } = await response.json();
    
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
}

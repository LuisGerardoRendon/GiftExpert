
export const getGifts = async (category) => {
    const apikey="5WgyQpeCzWLMP85TG9UBN8cMjIpKc9bA"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=5`
    const response = await fetch(url)
    const {data} = await response.json()
    
    const gifs= data.map(img => ({id: img.id, title: img.title, url: img.images.downsized_medium.url}))

    console.log(gifs)

    return gifs;

}
export const getGif = async ( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ggLhpfiMWKSCEzN0XM1kp4J6Gf1mkFvm&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch (url);
    const { data }  = await resp.json();


    const gift = data.map(img => {
        return (
            {
                id:img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        )
    })

    return gift;
    
}

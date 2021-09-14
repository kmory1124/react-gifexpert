

export const getGift= async(category)=>{

    //obtiene url del endpoint api
    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=1aify1yArUMCJI1ajVMT1vfX7Kc8arwd` //encodeURI quita espacios u otros caracteres en la url
    //obtiene la respuesta api
    const resp = await fetch(url);
    //se obtiene el valor de la propiedad data de la respuesta en json del api mediante desestructuracion.
    const {data} = await resp.json();
    //se obtiene los id , title, url de cada gift traido mediante el api
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //el signo "?" valida que si viene las imagenes lsa utiliza
        }
    })
    
    //retorna los gif
    return gifs

}
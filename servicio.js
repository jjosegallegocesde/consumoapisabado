let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US";

let token="Bearer BQAVq3YkLjme3CuVm7E6rsjYQAU48mlgC7i9bhRddGtkkSgyGEbfONcmjTI2zzGOegFm6tc6hOkLWqiQ_1x29Ytb6MRTbp8C_yqvJ2umNSq0Bvg1MsgumQgAYGnKzKM7dpzOBjQPf5RXRGCBG8w";

let parametrosPeticion={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta); //objeto
    pintarDatos(respuesta.tracks);
    
    /*console.log(respuesta.tracks); //arreglo
    console.log(respuesta.tracks[0]);//objeto
    console.log(respuesta.tracks[0].name);
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);*/

})

.catch(function(error){
    console.log(error);
})

function pintarDatos(datos){

    datos.forEach(function(cancion){
        console.log("el lider es el verde")
    })

}
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

    let fila=document.getElementById("fila");
    datos.forEach(function(cancion){
        
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        let titulo=document.createElement("h1");
        titulo.textContent=cancion.name


        //PADRES E HIJOS
        tarjeta.appendChild(imagen);
        
       

        columna.appendChild(tarjeta);
        fila.appendChild(columna);


    })

}
let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US";

let token="Bearer BQA0fcg5QUuLiIgICP7gAMcvjiZqXdg69a8D3RG6a3dXr_Dxad6IcFPsA7fdAM2O48Cc2X_cloNg8wETW-79aA1CVdypACifSKZCKIQm62xIip0iaJkogt_hvHVTwTlLgAj2fRxwd72uN-R-YZ4";

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
    console.log(respuesta);
})
.catch(function(error){
    console.log(error);
})
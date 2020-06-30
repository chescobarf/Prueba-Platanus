const consultarApi = async() => {
    const api = await fetch('https://run.mocky.io/v3/0cb08877-e723-4b1b-a5ef-c23dc49e7e90');
    const frase = await api.json()
    return frase;
  }

   const padre=document.getElementById("padre")
   console.log(padre)

  consultarApi();
  cargarEventListener()


  //Event listener

 function cargarEventListener(){

    document.addEventListener('DOMContentLoaded',cargarAlbumes);

  }


  async function cargarAlbumes(){
    const largo = await consultarApi();

    //Este fue el unico cambio que realize que es el forEach de elementos que lee cada elemento del arreglo
    // y le asigna al elemento padre la estructura que contiene los datos de cada objeto del arreglo

    largo.forEach(element => {
        padre.innerHTML+=`
        <div class="col s12 m4">
        <div class="card">
        <div class="card-image">
            <img src="${element.coverArt}">
        </div>
        <div class="card-content">
        <h5>${element.title}</h5>
        <p>${element.artist} | ${element.year}</p>
        </div>
        <div class="card-action">
        <a href="#">Ver Canciones</a>
        </div>
        </div>
        </div>
        `
    });
  }



    
    
    

    // padre.innerHTML=
    // `<div class="card">
    // <div class="card-image">
    // <img src="images/sample-1.jpg">
    // <span class="card-title">Card Title</span>
    // </div>
    // <div class="card-content">
    // <p>I am a very simple card. I am good at containing small bits of information.
    // I am convenient because I require little markup to use effectively.</p>
    // </div>
    // <div class="card-action">
    // <a href="#">This is a link</a>
    // </div>
    // </div>
    // `




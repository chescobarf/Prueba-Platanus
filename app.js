const consultarApi = async() => {
    const api = await fetch('https://run.mocky.io/v3/0cb08877-e723-4b1b-a5ef-c23dc49e7e90');
    const frase = await api.json()
    return frase;
  }

   const padre=document.getElementById("padre")
   
   const canciones=document.getElementById("canciones")


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
        console.log(element.songs) 
        padre.innerHTML+=`
        <div class="col s12 m4 album" >
            <div class="card">
                <div class="card-image">
                    <img class="cover" src="${element.coverArt}">
                </div>
                <div class="card-content">
                    <h5 class="titulo">${element.title}</h5>
                    <p class="artista">${element.artist} | ${element.year}</p>
                </div>
                <div class="card-action">
                    <a href="#modal${element.id}" class="waves-effect waves-light btn modal-trigger amber darken-2 boton-canciones">Ver Canciones</a>
                </div>
            </div>
        </div>
        `;
        canciones.innerHTML+=
        `
        <div id="modal${element.id}" class="modal bottom-sheet">
            <div class="modal-content">
                <h4>Canciones</h4>
                <ul class="collection" id="List${element.id}">

                </ul>
            </div>
            <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat red darken-2 white-text">Cerrar</a>
            </div>
        </div>
        `
        // es importtante inicializar cada uno de estos modal para que funcione en materialize 
        $('.modal').modal();

        const album = document.getElementById(`List${element.id}`)
        for (const song of element.songs) {
            var millisecond=song.durationMilliseconds
            var minutes=Math.trunc((millisecond/1000) / 60);
            var seconds=Math.trunc((millisecond/1000) % 60);
            if(seconds<10){
                seconds=`0${seconds}`
            }
            album.innerHTML+=
            `
            <li class="collection-item avatar">
                <img src="${song.coverArt}" alt="" class="circle">
                <span class="title">${song.title}</span>
                <p>Track: ${song.trackNumber}<br> 
                    ${minutes}:${seconds}
                </p>
                <a href="#!" class="secondary-content">
                    <i class="material-icons grey-text text-darken-2">grade</i>
                </a>
            </li>
        `
        }

    });
    // const botonCanciones=document.getElementsByClassName("boton-canciones")[element]
    // botonCanciones.addEventListener('click',cargarCanciones);
  }


//   async function cargarCanciones(){
//       const largo= await consultarApi();
//       largo.forEach(element=>{
//             element.songs.forEach(elementTwo=>{
//               console.log(elementTwo.trackNumber);
//                 canciones.innerHTML+=
//                 `
//                 <li class="collection-item avatar">
//                     <img src="${elementTwo.coverArt}" alt="" class="circle">
//                     <span class="title">${elementTwo.title}</span>
//                     <p>${elementTwo.artist}
//                         <br> ${elementTwo.durationMilisecond}
//                     </p>
//                     <a href="#!" class="secondary-content">
//                         <i class="material-icons">grade</i>
//                     </a>
//                 </li>
//                 `
//             })
        
//       })
//   }


 

    
    
    

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




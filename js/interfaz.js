class Interfaz {
    
    mostrarLibros(titulo, autor){
        const libros = api.obtenerLibros(titulo, autor)
            .then(data =>{
                const  fragment = document.createDocumentFragment()
                const contenedor = document.getElementById('resultado-busqueda')
                data.libros.forEach((libro, index)=>{
                    const elemento = document.createElement('div')
                    elemento.classList.add('col-12', 'col-md-4')
                    elemento.innerHTML = `
                        <div class="card">
                            <img src=${libro.thumbnail} class="card-img-top height="200">
                            <div class="card-body">
                                <p class="card-title h5">${libro.title}</p>
                                <p class="card-text">${libro.content_short}</p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item">Autor: ${libro.author}</li>
                                <li class="list-group-item">Fecha de publicación: ${libro.publisher_date}</li>
                                <li class="list-group-item">Idioma de libro: ${libro.language}</li>
                            </ul>
                            <div class="row card-body text-center">
                                <a href=${libro.url_details} class="btn btn-primary w-100 mb-2">Ver más</a>
                                <a href=${libro.url_download} class="btn btn-primary w-100 ">Descargar</a>
                            </div>
                        </div>
                    `
                    fragment.appendChild(elemento)
                })
                contenedor.appendChild(fragment)
            })
            
    }
}
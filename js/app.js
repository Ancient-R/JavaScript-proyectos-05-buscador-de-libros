const ui = new Interfaz()
const api = new API()

const campoTitulo = document.getElementById('titulo-libro')
const campoAutor = document.getElementById('nombre-autor')
const botonBuscar = document.getElementById('buscarBtn')

botonBuscar.addEventListener('click', (e)=>{
    let titulo = campoTitulo.value
    let autor = campoAutor.value

    if(titulo === '') titulo = null
    if(autor === '') autor = null

    ui.mostrarLibros(titulo, autor)
    campoTitulo.value = ''
    campoAutor.value = ''
})


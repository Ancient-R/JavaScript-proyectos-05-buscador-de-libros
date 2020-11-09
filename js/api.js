class API {
    //Obtenemos los libros de acuerdo a los campos
    async obtenerLibros(titulo, autor){
        const url = fetch(`https://www.etnassoft.com/api/v1/get/?book_title=${titulo}&book_autor=${autor}`)
        const urlObtenerLibros = await url

        const libros = await urlObtenerLibros.json()
        
        return{
            libros
        }
    }
}
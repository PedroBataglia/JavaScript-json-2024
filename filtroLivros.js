const listaLivros = require("./livros.json");

function superfilter(filtro, valor) {
    let livrosFiltrados = [];
    for(index = 0; index < listaLivros.length; index++) {
        if(listaLivros[index][filtro] == valor) {
            livrosFiltrados.push(listaLivros[index]);
        }
    }
    return livrosFiltrados;
}

console.log(superfilter("Autor", "Kerri Maniscalco"))
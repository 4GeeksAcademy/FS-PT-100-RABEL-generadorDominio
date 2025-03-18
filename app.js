// Arrays con las palabras para generar dominios
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

// Función para generar dominios
function generateDomains() {
    // Recorremos cada array con bucles anidados
    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                for (let ext of extensions) {
                    // Concatenamos las palabras y la extensión
                    let domain = `${p}${a}${n}${ext}`;
                    console.log(domain); // Mostramos el dominio en la consola
                }
            }
        }
    }
}

// Llamamos a la función para generar los dominios
generateDomains();
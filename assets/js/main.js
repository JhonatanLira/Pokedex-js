const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

fetch(url).then(function (response) {
    console.log(response)
})
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })










//https://pokeapi.co/api/v2/pokemon/
//Dominando o Protocolo HTTP e Integrando com a PokeAPI
// Manipulando o resultado da requisição através de uma Promise - 6:30

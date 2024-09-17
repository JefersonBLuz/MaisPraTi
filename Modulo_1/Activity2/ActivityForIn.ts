/**1. Acessando Propriedades de Objetos
Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
 */

interface car{
    marca: string ,
    modelo: string,
    ano: number,
    cor: string
}

let car: car = {marca: 'Ferrari', ano: 2024, cor: 'red', modelo: 'Roma'}

for (let key in car) {
    // console.log(`${key}: ${car}`)
    console.log(`${key}: ${car[key as keyof car]}`)
}

/**2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
 */

interface book{
    title: string,
    author: string,
    year: number,
    color: string
    publisher?: string
}
const Book: book = {
    title: `Harry Potter and the Philosopher's Stone`,
    author: 'J. K. Rowling',
    year: 1997,
    color: 'Red'
}
let validation: boolean = true
for (const key in Book) {
    if (key === 'publisher') {
        validation = false
        break
    }
}
if (validation) {
    Book['publisher'] = 'Bloomsbury'
}
/**3. Filtrando Propriedades de Objetos
Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
 */
interface product{
    [name: string]: number
}
const products: product={
    sabao: 5.00,
    arroz: 7.00,
    feijao: 8.00,
    sabonete: 3.00,
    cafe: 4.30,
    papel: 3.80,
    tesoura: 2.50
}
const productPromo: product = {}

for (const key in products) {
        const element = products[key];
        if (element>=5) {
            productPromo[key] = element
        }
}
console.log(productPromo);

interface Product{
    name: string,
    value: number
}
const Products: Array<Product>=[
    {name: 'Arroz', value: 7.50},
    {name: 'Feijão', value: 5.39},
    {name: 'Sabão em pó', value: 10},
    {name: 'Alface', value: 2},
    {name: 'Tomage Kg.', value: 4},
    {name: 'Picanha Kg.', value: 50}
]
interface Film{
    title: string,
    director: string,
    releaseyear: number
}
const Films: Array<Film>=[
    {title:'O Senhor dos Anéis 1',director:'Peter Jackson',releaseyear: 2001},
    {title:'O Senhor dos Anéis 2',director:'Peter Jackson',releaseyear: 2002},
    {title:'O Senhor dos Anéis 3',director:'Peter Jackson',releaseyear: 2003}
]
interface Customer{
    name: string,
    age: number,
    city: string
}
import { People } from "./ForOf"
const Customers:Array<Customer> = People
export {Products, Films,Customers}
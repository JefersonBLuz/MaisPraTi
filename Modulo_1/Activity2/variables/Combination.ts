import { Products } from "./ForEach"

interface Product {
    name: string,
    amount: number,
    value: number
}

const Sales: Array<Product> = [
    { ...Products[0], amount: 5 },
    { ...Products[1], amount: 10 },
    { ...Products[2], amount: 7 },
    { ...Products[3], amount: 8 },
    { ...Products[4], amount: 9 },
    { ...Products[5], amount: 3 }
]
interface order {
    customer: string,
    product: string,
    amount: number
}
const Orders: Array<order> = [
    { customer: 'João', product: 'DVD', amount: 2 },
    { customer: 'João', product: 'CD', amount: 10 },
    { customer: 'João', product: 'Blu-ray', amount: 5 },
    { customer: 'Maria', product: 'DVD', amount: 4 },
    { customer: 'Maria', product: 'CD', amount: 7 }
]

interface customerProducts {
    [customer: string]: number
}
const CustomersProducts: customerProducts = {}
interface productStock {
    name: string,
    amount: number,
    minimum: number
}
const Stock: Array<productStock> = [
    { ...Sales[0], minimum: 2 },
    { ...Sales[1], minimum: 4 },
    { ...Sales[2], minimum: 20 },
    { ...Sales[3], minimum: 10 },
    { ...Sales[4], minimum: 5 },
    { ...Sales[5], minimum: 15 }
]
interface items {
    name: string,
    amount: number,
    unitPrice: number
}
const Cart: items[] = [
    { name: 'Arroz', amount: 10, unitPrice: 5.6 },
    { name: 'Feijão', amount: 4, unitPrice: 7.8 },
    { name: 'Sal', amount: 2, unitPrice: 1.2 },
    { name: 'Macarrão', amount: 5, unitPrice: 4.6 }
]
interface employee {
    name: string
}
interface departments {
    name: string,
    employees: employee[]
}
const Enterprise: departments[] = [
    {
        name: 'TI',
        employees: [
            { name: 'João' },
            { name: 'Maria' },
            { name: 'José' }
        ]
    },
    {
        name: 'RH',
        employees: [
            { name: 'Zeroberto' },
            { name: 'Umberto' },
            { name: 'Doisberto' }
        ]
    },
    {
        name: 'Financeiro',
        employees: [
            { name: 'Fulaninho' },
            { name: 'Siclano' },
            { name: 'Fulano' }
        ]
    },
]
interface transaction{
    transactionType: boolean,
    value: number
}
/**True: entrada
 * False: Saída
*/
const Transactions: Array<transaction>=[
    {transactionType: true, value: 500},
    {transactionType: false, value: 200},
    {transactionType: false, value: 150},
    {transactionType: true, value: 300},
    {transactionType: false, value: 375},
    {transactionType: false, value: 75},
    {transactionType: false, value: 50},
    {transactionType: true, value: 680},
    {transactionType: false, value: 175},
    {transactionType: false, value: 225},
    {transactionType: false, value: 87}
]
export { Sales, Orders, CustomersProducts, Stock, Cart, Enterprise, Transactions }
import { Categoria } from "../interfaces/categorias";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hamburguesas',
        id: 1,
        imgUrl: 'https://osojimix.com/wp-content/uploads/2021/04/hamburguesa.jpg',
        productos: [{
            nombre: 'Hamburguesa 1',
            precio: 2220,
            ingredientes: [],
            imagen: ''
        },
        {
            nombre: 'Hamburguesa 2',
            precio: 3330,
            ingredientes: [],
            imagen: ''
        },
        {
            nombre: 'Hamburguesa 3',
            precio: 44440,
            ingredientes: [],
            imagen: ''
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        imgUrl: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg',
        productos: []
    },
    {
        nombre: 'Postres',
        id: 3,
        imgUrl: 'https://content-cocina.lecturas.com/medio/2022/01/19/paso_a_paso_para_realizar_tarta_de_flan_con_galletas_y_chocolate_sin_azucar_resultado_final_1ce8842f_600x600.jpg',
        productos: []
    },
    {
        nombre: 'Bebidas',
        id: 4,
        imgUrl: 'https://misbebidas.com/wp-content/uploads/2023/05/bebidas-alcoholicas.jpg',
        productos: []
    },
]
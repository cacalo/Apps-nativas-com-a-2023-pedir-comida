import { Categoria } from "../interfaces/categorias";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hamburguesas',
        id: 250,
        imgUrl: 'https://osojimix.com/wp-content/uploads/2021/04/hamburguesa.jpg',
        productos: [{
            nombre: 'Hamburguesa 1',
            precio: 2220,
            ingredientes: [],
            imagen: 'https://recetinas.com/wp-content/uploads/2023/03/Hamburguesa-con-pan-negro.jpg'
        },
        {
            nombre: 'Hamburguesa 2',
            precio: 3330,
            ingredientes: [],
            imagen: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_muqvn0kg1s_e8a3509-1024x683.jpg.webp'
        },
        {
            nombre: 'Hamburguesa 3',
            precio: 44440,
            ingredientes: [],
            imagen: 'https://eci.contebio.com/material/aptc/images/aptc/2316406/hamburguesa-torres_0.jpg'
        }]
    },
    {
        nombre: 'Pizzas',
        id: 1,
        imgUrl: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg',
        productos: []
    },
    {
        nombre: 'Postres',
        id: 2,
        imgUrl: 'https://content-cocina.lecturas.com/medio/2022/01/19/paso_a_paso_para_realizar_tarta_de_flan_con_galletas_y_chocolate_sin_azucar_resultado_final_1ce8842f_600x600.jpg',
        productos: []
    },
    {
        nombre: 'Bebidas',
        id: 3,
        imgUrl: 'https://misbebidas.com/wp-content/uploads/2023/05/bebidas-alcoholicas.jpg',
        productos: []
    },
]
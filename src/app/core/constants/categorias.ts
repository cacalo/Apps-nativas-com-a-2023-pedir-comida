import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://osojimix.com/wp-content/uploads/2021/04/hamburguesa.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguesa 1',
        precio: 2220,
        ingredientes: [],
        imagen:
          'https://recetinas.com/wp-content/uploads/2023/03/Hamburguesa-con-pan-negro.jpg',
      },
      {
        id: 2,
        nombre: 'Hamburguesa 2',
        precio: 3330,
        ingredientes: ['Tomate', 'Lechuga'],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_muqvn0kg1s_e8a3509-1024x683.jpg.webp',
      },
      {
        id: 3,
        nombre: 'Hamburguesa 3',
        precio: 44440,
        ingredientes: [],
        imagen:
          'https://eci.contebio.com/material/aptc/images/aptc/2316406/hamburguesa-torres_0.jpg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Pizza común',
        precio: 1000,
        ingredientes: ['Muzarella', 'Aceitunas', 'Orégano'],
        imagen:
          'https://caserissimo.com/wp-content/uploads/2015/08/pizabuaur1-1024x768.jpg',
      },
      {
        id: 5,
        nombre: 'Pizza especial',
        precio: 1200,
        ingredientes: ['Muzarella', 'Aceitunas', 'Morrones', 'Tomate', 'Huevo'],
        imagen:
          'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg',
      },
      {
        id: 6,
        nombre: 'Pizza 4 quesos',
        precio: 1300,
        ingredientes: ['Muzarella', 'Roquefort', 'Provolone', 'Parmesano'],
        imagen:
          'https://www.gourmet.cl/wp-content/uploads/2017/04/pizza-570x458.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://content-cocina.lecturas.com/medio/2022/01/19/paso_a_paso_para_realizar_tarta_de_flan_con_galletas_y_chocolate_sin_azucar_resultado_final_1ce8842f_600x600.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Tiramisú',
        precio: 800,
        ingredientes: [],
        imagen: 'https://i.blogs.es/410470/vasitos/1366_2000.jpeg',
      },
      {
        id: 8,
        nombre: 'Chocotorta',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg',
      },
      {
        id: 9,
        nombre: 'Turrón de Quaker',
        precio: 800,
        ingredientes: [],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://misbebidas.com/wp-content/uploads/2023/05/bebidas-alcoholicas.jpg',
    productos: [
      {
        id: 10,
        nombre: 'Agua',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
      },
      {
        id: 11,
        nombre: 'Agua Saborizada Naranja',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040783_f.jpg',
      },
      {
        id: 12,
        nombre: 'Fanta Uva',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://carrefourar.vtexassets.com/arquivos/ids/332920/7790895648670_E02.jpg?v=638212197029330000',
      },
    ],
  },
];

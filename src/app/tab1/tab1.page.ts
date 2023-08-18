import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interfaces/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {

  categorias:Categoria[] = [
    {nombre:'Hamburguesas', id:1, imgUrl:'https://osojimix.com/wp-content/uploads/2021/04/hamburguesa.jpg'},
    {nombre:'Pizzas', id:2, imgUrl:'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg'},
    {nombre:'Postres', id:3, imgUrl:'https://content-cocina.lecturas.com/medio/2022/01/19/paso_a_paso_para_realizar_tarta_de_flan_con_galletas_y_chocolate_sin_azucar_resultado_final_1ce8842f_600x600.jpg'},
    {nombre:'Bebidas', id:4, imgUrl:'https://misbebidas.com/wp-content/uploads/2023/05/bebidas-alcoholicas.jpg'},
  ]



}

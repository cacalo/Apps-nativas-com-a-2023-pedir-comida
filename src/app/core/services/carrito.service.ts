import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() {
    const memoria = localStorage.getItem('carrito');
    if(memoria) {
      this.carrito = JSON.parse(memoria);
      this.calcularTotal();
    };
   }

  carrito:Carrito[] = []
  totalCarrito: number = 0;

  agregarProducto(producto:Producto){
    this.carrito.push({
      producto: producto,
      cantidad: 1
    });
    this.actualizarLocalstorage();
    this.calcularTotal();
  }

  eliminarProducto(id:number){
    this.carrito = this.carrito.filter(item => item.producto.id !== id);
    this.actualizarLocalstorage(); 
    this.calcularTotal();
  }

  limpiarCarrito(){
    this.carrito = [];
    this.actualizarLocalstorage();
    this.calcularTotal();
  }

  actualizarLocalstorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }

  calcularTotal(){
    this.totalCarrito = 0;
    this.carrito.forEach(item => {
      this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
    })
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';


  //propiedades
  producto ={
    id: 0,
    descripcion: '',
    precio: 0 
  }

  //arreglo de productos
  productos = [
    {id:1, descripcion:'Gansito', precio: 25.50},
    {id:2, descripcion:'Galletas Marias', precio: 18},
    {id:3, descripcion:'Coca de Piña', precio: 21.50},
    {id:4, descripcion:'Chetos', precio: 18},
    {id:5, descripcion:'papas sabritas', precio: 20.50},
  ];


  //metodo que determina si hay productos en el arreglo
  hayProductos(){
    return this.productos.length > 0;
  }

  //funcion que agrega productos al arreglos
  agregarProducto(){
    if(this.producto.id==0){
      alert('El ID del producto debe ser diferente de CERO');
      return;
    }
    for (let i=0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        alert('Ya existe un producto con ese ID :( ');
        return;
      }
    }


    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });
    this.producto.id = 0;
    this.producto.descripcion;
    this.producto.precio;
  }

  //metood para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado:{id:number, descripcion: string, precio:number;}){
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
    
  }

  //funcion para modificar producto (El producto seleccionado)
  modificarProducto(){
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id) {
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
      }
    }
    alert('No Existe el ID');
  }


  //funcion para eliminar un producto
  eliminarProducto(id:number){
    for (let i = 0; i < this.productos.length; i++) {
      if (id == this.productos[i].id) {
        this.productos.splice(i,1);
        return;
      }
    }
  }

  
}




import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  title:string="PRODUCTOS"

  producto:any
  myFormProducto!: FormGroup;
  constructor(public servc:ClientenodeService) { 

  }


  ngOnInit(): void {

    this.obtenerProducto()
    this.myFormProducto = new FormGroup({
      nombreF: new FormControl(''),
      directorF: new FormControl(''),
      imagenF: new FormControl(''),
      actoresF: new FormControl(''),
      anioF: new FormControl(''),
      descripcionF: new FormControl(''),

    }
    );
  }

  obtenerProducto(){
        
  this.servc.getProducto().subscribe((r)=>{ 
    console.log(r)
    this.producto=r;

  }

  )
  }

  ingresarProducto(){

    let nombre = this.myFormProducto.value.nombreF;
    let director = this.myFormProducto.value.directorF;
    let imagen = this.myFormProducto.value.imagenF;
    let actores = this.myFormProducto.value.actoresF;
    let anio = this.myFormProducto.value.anioF;
    let descripcion = this.myFormProducto.value.descripcionF;

    this.servc.addProducto(nombre,director,imagen,actores,anio,descripcion).subscribe((r) =>{
      this.obtenerProducto()
      this.myFormProducto = new FormGroup({
        nombreF: new FormControl(''),
        directorF: new FormControl(''),
        imagenF: new FormControl(''),
        actoresF: new FormControl(''),
        anioF: new FormControl(''),
        descripcionF: new FormControl(''),
      });

    });
    }
    eliminarProducto(id:string){
      if(
        !confirm(
          'se eleminara el articulo seleccionado, si desea proceder de clic en Aceptar caso contrario escoja la opcion Cancelar'
        )
      ){
        return false;

      }else{
        this.servc.deleteProducto(id).subscribe((r)=>{
          console.log('Datos eliminados');
          this.obtenerProducto();
        });
        return true;
      }
    }
    editarProducto(id:string){


      let nombre = this.myFormProducto.value.nombreF;
      let director = this.myFormProducto.value.directorF;
      let imagen = this.myFormProducto.value.imagenF;
      let actores = this.myFormProducto.value.actoresF;
      let anio = this.myFormProducto.value.anioF;
      let descripcion = this.myFormProducto.value.descripcionF;
          
      this.servc.editProducto(nombre,director,imagen,actores,anio,descripcion, id).subscribe((r) =>{
        this.obtenerProducto();

      });
      }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  title:string="CATEGORIAS"
  categorias:any
  myFormCategoria!: FormGroup;
  constructor(public servc:ClientenodeService) { 

  }


  ngOnInit(): void {

    this.obtenerCategorias()
    this.myFormCategoria = new FormGroup({
      nombreF: new FormControl(''),
      directorF: new FormControl(''),
      imagenF: new FormControl(''),
      actoresF: new FormControl(''),
      anioF: new FormControl(''),
      descripcionF: new FormControl(''),

    }
    );
  }

  obtenerCategorias(){
        
  this.servc.getCategorias().subscribe((r)=>{ 
    console.log(r)
    this.categorias=r;

  }

  )
  }

  ingresarCategoria(){


    let nombre = this.myFormCategoria.value.nombreF;
    let director = this.myFormCategoria.value.directorF;
    let imagen = this.myFormCategoria.value.imagenF;
    let actores = this.myFormCategoria.value.actoresF;
    let anio = this.myFormCategoria.value.anioF;
    let descripcion = this.myFormCategoria.value.descripcionF;

    this.servc.addCategoria(nombre,director,imagen,actores,anio,descripcion).subscribe((r) =>{
      this.obtenerCategorias()
      this.myFormCategoria = new FormGroup({
        nombreF: new FormControl(''),
        directorF: new FormControl(''),
        imagenF: new FormControl(''),
        actoresF: new FormControl(''),
        anioF: new FormControl(''),
        descripcionF: new FormControl(''),
      });

    });
    }

    eliminarCategoria(id:string){
      if(
        !confirm(
          'se eleminara el articulo seleccionado, si desea proceder de clic en Aceptar caso contrario escoja la opcion Cancelar'
        )
      ){
        return false;

      }else{
        this.servc.deleteCategoria(id).subscribe((r)=>{
          console.log('Datos eliminados');
          this.obtenerCategorias();
        });
        return true;
      }
    }
    editarCategoria(id:string){


     
    let nombre = this.myFormCategoria.value.nombreF;
    let director = this.myFormCategoria.value.directorF;
    let imagen = this.myFormCategoria.value.imagenF;
    let actores = this.myFormCategoria.value.actoresF;
    let anio = this.myFormCategoria.value.anioF;
    let descripcion = this.myFormCategoria.value.descripcionF;
          
      this.servc.editCategoria(nombre,director,imagen,actores,anio,descripcion, id).subscribe((r) =>{
        this.obtenerCategorias();

      });
      }
}


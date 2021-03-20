import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  anime:any
  myFormAnime!: FormGroup;
  constructor(public servc:ClientenodeService) { }
  ngOnInit(): void {

    this.obtenerAnime()
    this.myFormAnime = new FormGroup({
      nombreF: new FormControl(''),
      directorF: new FormControl(''),
      imagenF: new FormControl(''),
      actoresF: new FormControl(''),
      anioF: new FormControl(''),
      descripcionF: new FormControl(''),

    }
    );
  }

  obtenerAnime(){
        
  this.servc.getAnime().subscribe((r)=>{ 
    console.log(r)
    this.anime=r;

  }

  )
  }

  ingresarAnime(){



    let nombre = this.myFormAnime.value.nombreF;
    let director = this.myFormAnime.value.directorF;
    let imagen = this.myFormAnime.value.imagenF;
    let actores = this.myFormAnime.value.actoresF;
    let anio = this.myFormAnime.value.anioF;
    let descripcion = this.myFormAnime.value.descripcionF;

    this.servc.addAnime(nombre,director,imagen,actores,anio,descripcion).subscribe((r) =>{
      this.obtenerAnime()
      this.myFormAnime = new FormGroup({
        nombreF: new FormControl(''),
        directorF: new FormControl(''),
        imagenF: new FormControl(''),
        actoresF: new FormControl(''),
        anioF: new FormControl(''),
        descripcionF: new FormControl(''),
      });

    });
    }
    eliminarAnime(id:string){
      if(
        !confirm(
          'se eleminara el articulo seleccionado, si desea proceder de clic en Aceptar caso contrario escoja la opcion Cancelar'
        )
      ){
        return false;

      }else{
        this.servc.deleteAnime(id).subscribe((r)=>{
          console.log('Datos eliminados');
          this.obtenerAnime();
        });
        return true;
      }
    }
    editarAnime(id:string){


      let nombre = this.myFormAnime.value.nombreF;
      let director = this.myFormAnime.value.directorF;
      let imagen = this.myFormAnime.value.imagenF;
      let actores = this.myFormAnime.value.actoresF;
      let anio = this.myFormAnime.value.anioF;
      let descripcion = this.myFormAnime.value.descripcionF;
          
      this.servc.editAnime(nombre,director,imagen,actores,anio,descripcion, id).subscribe((r) =>{
        this.obtenerAnime();

      });
      }
}

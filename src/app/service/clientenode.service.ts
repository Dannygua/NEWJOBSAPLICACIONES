import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';
import { Producto } from './Producto';
import { Anime } from './Anime';

@Injectable({
  providedIn: 'root'
})
export class ClientenodeService {

  URL:string = "https://distribuidas-308122.rj.r.appspot.com/peliculas/";
  URLP:string = "https://distribuidas-308122.rj.r.appspot.com/juegos/";
  URLA:string = "https://distribuidas-308122.rj.r.appspot.com/animes/";
  constructor(private httpc:HttpClient) {
  

   }
   getCategorias(): Observable<Categoria>{
     return this.httpc.get<Categoria>(this.URL);
   }
   addCategoria(nombreF:string,directorF:string,imagenF:string,actoresF:string,anioF:string,descripcionF:string){
     let objetoCategoria = {nombre: nombreF,director:directorF,imagen:imagenF,actores:actoresF,anio:anioF,descripcion:descripcionF }

     return this.httpc.post(this.URL,objetoCategoria);
   }

   editCategoria(nombreF:string,directorF:string,imagenF:string,actoresF:string,anioF:string,descripcionF:string, idCategoria:string){
    let obj = {nombre: nombreF,director:directorF,imagen:imagenF,actores:actoresF,anio:anioF,descripcion:descripcionF }

    return this.httpc.put( `${this.URL}/${idCategoria}`,obj );
  }

  deleteCategoria( idCategoria:string){
    return this.httpc.delete( this.URL+idCategoria);
  }
   
  
     getProducto(): Observable<Producto>{
     return this.httpc.get<Producto>(this.URLP);
   }

   addProducto(nombreF:string,directorF:string,imagenF:string,actoresF:string,anioF:string,descripcionF:string){
    let objetoCategoria = {nombre: nombreF,director:directorF,imagen:imagenF,actores:actoresF,anio:anioF,descripcion:descripcionF }

     return this.httpc.post(this.URLP,objetoCategoria);
   }


   editProducto(nombreF:string,directorF:string,imagenF:string,actoresF:string,anioF:string,descripcionF:string, idCategoria:string){
    let obj = {nombre: nombreF,director:directorF,imagen:imagenF,actores:actoresF,anio:anioF,descripcion:descripcionF }

    return this.httpc.put( `${this.URLP}/${idCategoria}`,obj );
  }

  deleteProducto(idProducto:string){

    return this.httpc.delete( this.URLP+idProducto);
  }
   
  getAnime(): Observable<Anime>{
    return this.httpc.get<Anime>(this.URLA);
  }

  addAnime(nombreF:string,directorF:string,imagenF:string,actoresF:string,anioF:string,descripcionF:string){
    let objetoCategoria = {nombre: nombreF,director:directorF,imagen:imagenF,actores:actoresF,anio:anioF,descripcion:descripcionF }

    return this.httpc.post(this.URLA,objetoCategoria);
  }


  editAnime(nombreF:string,directorF:string,imagenF:string,actoresF:string,anioF:string,descripcionF:string, idCategoria:string){
    let obj = {nombre: nombreF,director:directorF,imagen:imagenF,actores:actoresF,anio:anioF,descripcion:descripcionF }

   return this.httpc.put( `${this.URLA}/${idCategoria}`,obj );
 }

 deleteAnime( idAnime:string){

   return this.httpc.delete( this.URLA+idAnime);
 }
  
}

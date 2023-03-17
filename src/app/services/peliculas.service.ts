import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas/pelicula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ewste servicio lo podemos usar en cualquier sitio de la app
})

export class PeliculasService {

  private peliculas:Pelicula[]  // propiedad con objetos
  private api:string

  constructor(private http: HttpClient) {
    //console.log('Servicio listo para usar!');
    this.peliculas = [] // inicializacion de la propiedad como array vacio
    this.api = "https://alcyon-it.com/APIS/Movies/index.php/peliculas"
  }

  public getPeliculas(): Observable <Pelicula[]>{ // metodo y observable de tipo Pelicula
    return this.http.get<Pelicula[]>(this.api)
  }
  //busca una coincidencia entre el id que se mete como parametro y el id de las peliculas
  public getPelicula(id:number): Observable <Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.api}/${id} `)
   }
}

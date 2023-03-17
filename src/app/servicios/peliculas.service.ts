import { Injectable } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas:Pelicula[]
  private api:string

  constructor(private http:HttpClient) {
   this.peliculas = []
   this.api = "https://alcyon-it.com/APIS/Movies/index.php/peliculas"
  }

  public getPeliculas():Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.api)
  }

  public getPelicula(id:number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.api}/${id}`)
   }

}

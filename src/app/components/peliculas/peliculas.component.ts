import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit {
  public peliculas:Pelicula[]

  constructor(private servicio:PeliculasService) {
    this.peliculas = []
  }

  ngOnInit(): void {
    //tareas a realizar cuando se carga el componente
    //this.peliculas = this.servicio.getPeliculas()
    //console.log(this.peliculas)

    this.servicio.getPeliculas().subscribe({
      next: (peliculas) => {
        this.peliculas = peliculas
      },
      error: (error) => console.log(error)
    })
  }

}

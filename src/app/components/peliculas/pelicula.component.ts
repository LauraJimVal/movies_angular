import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit{
  public pelicula:Pelicula

  constructor(private ruta:ActivatedRoute, private servicio:PeliculasService) {
    //inicializar la propiedad pelicula
    this.pelicula = {
      id: 0,
      titulo: '',
      sinopsis: '',
      anio: 0,
      direccion: '',
      img: ''
    }
    //recuperar el parámetro de la ruta
    //let id = this.ruta.snapshot.params['id']

    //recuperar los datos de la película del servicio
    //this.pelicula = this.servicio.getPelicula(id)
    //console.log(this.pelicula)
  }

  ngOnInit(): void {
    //recuperar el parámetro de la ruta
    this.ruta.params.subscribe(params => {
      let id = params['id']
      //this.pelicula = this.servicio.getPelicula(id)
      this.servicio.getPelicula(id).subscribe({
        next: (pelicula) => this.pelicula = pelicula,
        error: (respuesta) => window.alert(respuesta.error)
      })
    })
  }
}

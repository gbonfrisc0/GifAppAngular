import { Component, ElementRef, ViewChild } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //El ! se asegura que el objeto no es nulo es para decirle a typescript que confie
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) { }

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.gifService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}

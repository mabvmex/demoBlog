import { Component } from '@angular/core';


// Servicios
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public infoPaginaService: InfoPaginaService,
              public porductosService: ProductosService) {

  }


}

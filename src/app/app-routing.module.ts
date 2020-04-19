import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SearchComponent } from './pages/search/search.component';


// tslint:disable-next-line: variable-name
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, {useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

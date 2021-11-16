import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { PropositoComponent } from './proposito/proposito.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'proposito', component: PropositoComponent},
  { path: 'productos', component: ProductosComponent},
  { path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

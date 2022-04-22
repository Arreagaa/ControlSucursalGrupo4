import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import {EmpresaComponent} from './components/empresa/empresa.component';
import { ProductosEComponent } from './components/productos-e/productos-e.component';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { ProductosSComponent } from './components/productos-s/productos-s.component';
import { DashboardInicioComponent } from './components/dashboard-inicio/dashboard-inicio.component';

//aqui se importan los componentes
const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Sucursales', component: SucursalesComponent},
  {path: 'Empresa', component: EmpresaComponent},
  {path:'productoE', component:ProductosEComponent},
  {path:'verEmpresa/:idEmpresa', component:VerEmpresaComponent},
  {path:'productoS',component: ProductosSComponent},
  {path: 'DashboardInicio', component: DashboardInicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

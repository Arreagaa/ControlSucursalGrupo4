import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import {EmpresaComponent} from './components/empresa/empresa.component'

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Sucursales', component: SucursalesComponent},
  {path: 'Empresa', component: EmpresaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

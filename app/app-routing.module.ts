import { Component, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EditpresComponent } from './editpres/editpres.component';




import { InicioComponent } from './inicio/inicio.component';
import { ListpresComponent } from './listpres/listpres.component';
import { LoginComponent } from './login/login.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { AddproveeComponent } from './proveedores/proveedores/addprovee/addprovee.component';



import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
{path: "", component:InicioComponent},
{path: "proveedores", component:ProveedoresComponent},
{path: "addprovee", component:AddproveeComponent},
{path: 'addpres', component: AddpresComponent},
{path: 'Registrarse', component: RegistrarseComponent},
{path: 'listpres', component: ListpresComponent},
{path: 'login',component:LoginComponent},
{path: 'editpres',component:EditpresComponent},
{path: "**",component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

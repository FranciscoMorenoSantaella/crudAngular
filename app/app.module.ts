import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresupuestosService } from './servicios/presupuestos.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ListpresComponent } from './listpres/listpres.component';
import { EditpresComponent } from './editpres/editpres.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    HeaderComponent,
    AddproveeComponent,
    InicioComponent,
    AddpresComponent,
    RegistrarseComponent,
    ListpresComponent,
    EditpresComponent,
    LoginComponent,
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule
  
  ],
  providers: [ProveedoresService,PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

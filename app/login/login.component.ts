import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../servicios/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  };
  constructor(private authS: AuthserviceService) {}

  ngOnInit(): void {}

  acceder() {
    const { email, password } = this.usuario;
    this.authS.login(email, password).then((res) => {
      console.log('inicio sesion correctamente', res);
    });
  }

  registrarse() {
    const { email, password } = this.usuario;
    this.authS.register(email, password).then((res) => {
      console.log('Se registro', res);
    });
  }
  accederConGoogle() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authS.loginWithGoogle(email, password).then((res) => {
      alert('Se logueo correctamente con el email: ' + res?.user?.email);
    });
  }
  getUserLogged() {
    this.authS.getUserLogged().subscribe((res) => {
      alert('El usuario logeado es: ' + res?.email);
    });
  }

  logout() {
    this.authS.logout();
    alert('usted cerró sesión correctamente');
  }
}

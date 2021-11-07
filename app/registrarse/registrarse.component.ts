import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  public writeUserData(userId: string, name: any, email: any, password: any) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      password : password,
    });
  }
  
}

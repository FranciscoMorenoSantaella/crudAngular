import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: [
  ]
})
export class ProveedoresComponent implements OnInit {

  constructor(private proveedoresService: ProveedoresService) { }
  proveedores:any;
  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }




  

}

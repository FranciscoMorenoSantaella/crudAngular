import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Presupuestos } from '../model/Presupuestos';
import { PresupuestosService } from '../servicios/presupuestos.service';
@Component({
  selector: 'app-listpres',
  templateUrl: './listpres.component.html',
  styleUrls: ['./listpres.component.css'],
})
export class ListpresComponent implements OnInit {
  presupuestosList?: any | undefined;
  constructor(private presupuestosS: PresupuestosService) {}

  ngOnInit() {
    this.loadPresupuestos();
  }

  reloadData() {
    this.loadPresupuestos();
  }

  loadPresupuestos() {
    return this.presupuestosS
      .getPresupuestos()
      .snapshotChanges()
      .subscribe((item) => {
        this.presupuestosList = [];
        item.forEach((element) => {
          let x: any = element.payload.toJSON();

          x['$key'] = element?.key;
          console.log(this.presupuestosList['$key']);
          this.presupuestosList?.push(x as Presupuestos);
        });
      });
  }

  pasarKey($key: any) {
    console.log($key);
    if (!$key) {
      return $key;
      
    }
  }

  onDelete($key: string) {
    console.log($key);
    this.presupuestosS.deletePresupuesto($key);

    //this.toastr.warning('Deleted Successfully', 'Product Removed');
  }
}

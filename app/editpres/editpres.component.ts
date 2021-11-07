import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PresupuestosService } from '../servicios/presupuestos.service';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {
  editForm: FormGroup | undefined;
  pf: any;
  constructor(private fb:FormBuilder, private presupuestoService:PresupuestosService, private location:Location, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.updatePresData();
    const $key = this.actRoute.snapshot.paramMap.get('$key');
    this.presupuestoService.GetPresupuesto('$key').valueChanges().subscribe((data: { [key: string]: any; })=>{
      this.editForm?.setValue(data);
    })
  }

  updatePresData(){
    this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
       iva: [{value: '', disabled: true}],
       total: [{value: '', disabled: true}],
      });
  }

}

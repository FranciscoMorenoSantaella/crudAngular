import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Presupuestos } from 'src/app/model/Presupuestos';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css'],
})
export class AddpresComponent implements OnInit {
  datosguardados:boolean = false;
  presupuestoForm!: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  constructor(private pf: FormBuilder,private presupuestoService: PresupuestosService,) {}

  
  ngOnInit() {
  
    this.presupuestoForm = this.pf.group({
     proveedor: ['', Validators.required ],
     fecha: ['', Validators.required ],
     concepto: ['', [ Validators.required, Validators.minLength(10)] ],
     base: ['', Validators.required ],
     tipo: ['', Validators.required ],
      iva: [{value: '', disabled: true}],
      total: [{value: '', disabled: true}],
     });
    this.onChanges(); 
    
    }

    onSubmit(){
      console.log(this.presupuesto);
      this.presupuestoService.addPresupuesto(this.presupuestoForm.value);
      this.datosguardados = true;
      alert("El presupuesto se ha añadido con éxito")
      this.presupuestoForm.reset();
      
    }

    /*onDelete(){
      this.presupuestoService.deletePresupuesto(this.presupuesto.value);
    }*/

    

    onChanges(): void {
      this.presupuestoForm.valueChanges.subscribe(valor => { 
      this.base = valor.base; 
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo; 
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
      
      });
      }


   
    
      
     
      
   

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor')?.value,
      fecha: this.presupuestoForm.get('fecha')?.value,
      concepto: this.presupuestoForm.get('concepto')?.value,
      base: this.presupuestoForm.get('base')?.value,
      tipo: this.presupuestoForm.get('tipo')?.value,
      iva: this.presupuestoForm.get('iva')?.value,
      total: this.presupuestoForm.get('total')?.value,
    };
    return savePresupuesto;
  }
}

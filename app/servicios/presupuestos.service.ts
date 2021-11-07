import { Injectable } from '@angular/core';
import {
  AngularFireList,
  AngularFireDatabase,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Presupuestos } from '../model/Presupuestos';
@Injectable({
  providedIn: 'root',
})
export class PresupuestosService {
  PresupuestoList?: AngularFireList<any>;
  selectedPresupuesto: any;
  constructor(private fireDB: AngularFireDatabase) {}

  addPresupuesto(presupuesto: Presupuestos) {
    return this.fireDB.list('presupuestos').push(presupuesto);
  }

  GetPresupuesto($key: string) {
    this.selectedPresupuesto = this.fireDB.object('presupuestos/' + $key);
    return this.selectedPresupuesto.$key;
  }

  getPresupuestos()
  {
    return this.PresupuestoList = this.fireDB.list('presupuestos');
  }


  updatePresupuesto(presupuesto: any)
  {
    this.PresupuestoList?.update(presupuesto.$key, {
      proveedor: presupuesto.proveedor,
      fecha: presupuesto.fecha,
      concepto: presupuesto.location,
      base: presupuesto.base,
      tipo: presupuesto.tipo,
      iva: presupuesto.iva,
      total: presupuesto.total
    });
  }
  
  

  deletePresupuesto($key: string)
  {
    this.fireDB.list('presupuestos').remove($key);
  }

  /*private presupuestosDB: AngularFireList<Presupuestos>;

  
  constructor(private db: AngularFireDatabase) {
    //? Accedemos a la base de datos de firebase.
    //? Vamos a acceder la lista de jugadores en la db.
    //? y se implementa la funcionalidad en el segundo argumento.
    //? La referencia que es nuestra lista de jugadores, se va a ordenar por nombre.
    this.presupuestosDB = this.db.list('/presupuesto', (ref) =>
      ref.orderByChild('Proveedor')
    )};

    addPresupuesto(presupuesto: Presupuestos) {
      //?Con esto FireBase se encarga de todo,
      //?no hay que pensar en endpoints o si esta o no creada la tabla.
      //?Adicionamos un nuevo record a la tabla.
      return this.presupuestosDB.push(presupuesto);
    }


    
   
   getPresupuestos(key:string):void{
    this.presupuestosDB = this.db.list('/presupuesto').snapshotChanges().pipe()
   }*/
  onDelete() {}
}

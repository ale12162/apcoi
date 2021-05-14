import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import{ AngularFirestore }from "@angular/fire/firestore";
import{map} from"rxjs/operators"

export interface respuesta{
  documento : number
  email : string
  nombre : string
  id: string
  Respuestas: Array<number>[31];
  FechaRespuesta : number;
  IDCuestionario : string;
}
export interface cuestionario{
  FechaRespuesta : number;
  idr : any;
  IDCuestionario : string;
  IDUsuario : string;
  Respuestas: Array<number>[31];
  nombre : string;
}


@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor(private db : AngularFirestore) { }
  getRespuestas(){
    return this.db.collection('RespuestasNuevas').snapshotChanges().pipe(map(X=>{
      return X.map(a=>{
        const data = a.payload.doc.data() as cuestionario;
        data.idr = a.payload.doc.id;
        return data;
      })
    }))
    }
    

  getData(){
    return this.db.collection('DataUsuarios').snapshotChanges().pipe(map(R=>{
      return R.map(n=>{
        const data = n.payload.doc.data() as respuesta;
        data.id = n.payload.doc.id;
        return data;
      })
    }))
    }
    
  }
  


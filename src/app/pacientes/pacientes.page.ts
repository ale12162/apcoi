import { Component, OnInit,  } from '@angular/core';
import{ AuthService} from"../servicios/auth.service";
import{RespuestasService, respuesta,cuestionario} from "../servicios/respuestas.service";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  public Respuestas: any=[];
  public Cuestionario: any=[];

  constructor(public authService: AuthService, public respuestasservice: RespuestasService,) {}
  
  Onlogout(){
    this.authService.logout();
  }
  Seleccionar(nombre:string){
    console.log(nombre);
    console.log((this.Cuestionario).length);
    for(let p=0;p<((this.Cuestionario).length);p++){
        if(nombre==((this.Cuestionario[p]).nombre)){
          console.log(this.Cuestionario[p]);
        }
    }
  }  
  

  ngOnInit(){
    var lr=0;
    this.respuestasservice.getRespuestas().subscribe(cuestionario=>{
      this.Cuestionario = cuestionario;
      console.log("aca pibe");
      console.log(this.Cuestionario);
   })
    this.respuestasservice.getData().subscribe(respuestas=>{
      this.Respuestas = respuestas;
      var lr = (this.Respuestas).length;
      console.log(lr);

     
     console.log((this.Cuestionario).length);
     console.log((this.Respuestas).length);
     for(let i=0;i<((this.Cuestionario).length);i++){
      for(let c=0;c<(lr);c++){
        if(((this.Respuestas[c]).id)==((this.Cuestionario[i]).IDUsuario)){
          (this.Cuestionario[i]).nombre=(this.Respuestas[c]).nombre;
    
        }
    }
    }
this.Respuestas = respuestas;
    }) 
  }
}


  
    



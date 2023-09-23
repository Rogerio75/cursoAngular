import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
public valor:boolean = true;
public heigthPx: string = "200px";
public backgroundColor: string = "red";
ngOnInit(): void {

  setInterval( ()=>{
   if(this.valor){
    this.valor = false;
   }else {
    this.valor =true;
  }


 if(this.heigthPx == "200px"){
 console.log('Alerte');
this.heigthPx="50px";
 }else{

 this.heigthPx ="200px";
 }


  },2000);
}


}

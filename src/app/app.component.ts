import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
   <app-diretivas-atributos>
    <h1> Aulas de Diretivas Atributo </h1>
     <h3>Final da Aula </h3>

     <h1>My name is Roger </h1>
     <h3> Fazendo um Piao </h3>
   </app-diretivas-atributos>
   <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
public destruir: boolean = true;

public destruirComponent(){
this.destruir = false;

}

 ngOnInit():void {}


}

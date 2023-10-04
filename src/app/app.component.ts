import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
 <!--
   <app-diretivas-atributos>
    <h1> Aulas de Diretivas Atributo </h1>
     <h3>Final da Aula </h3>

     <h1>My name is Roger </h1>
     <h3> Fazendo um Piao </h3>
   </app-diretivas-atributos>

<app-diretivas-atributos> </app-diretivas-atributos>
  -->
<!--
  <app-new-component> </app-new-component>
-->

 <!--
<app-input [contador]="addValue" >
</app-input>
<br>
<button (click)="Add()" >Add</button>
<br>
-->
<!--
<ng-template [ngIf]="getDados">
  <h1> {{getDados.nome}}</h1>
  <h2>{{getDados.idade}}</h2>
</ng-template>

<app-output (enviarDados)="setDados($event)"></app-output>
-->
<app-food-add> </app-food-add>
 <app-food-list></app-food-list>
 <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit {

  public getDados: {nome:string, idade:number} | undefined;

  public addValue: number = 0;

 public destruir: boolean = true;

public destruirComponent(){
this.destruir = false;

}
public setDados(event: {nome:string, idade:number}){
  this.getDados = event;

  }

public Add(){
  this.addValue +=1;
}

 ngOnInit():void {


 }


}

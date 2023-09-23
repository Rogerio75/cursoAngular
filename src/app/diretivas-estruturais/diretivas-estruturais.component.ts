import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
public condicao: boolean = true;
public condidicaoClick: boolean = true;
public list: Array<{nome:string, idade:number}> = [
  { nome: " Rogerio Fabricio", idade:40},
  { nome: " Cabula Fabricio",idade:41},
  { nome: " Ze ze Fabricio",idade:44}

];
public nome : string = "rogerio";

ngOnInit(): void {
  setInterval( ()=>{
   if( this.condicao){
 this.condicao =false
   }else {this.condicao= true
  }
},2000)

}
public onClik()
{
  if( this.condidicaoClick){
    this.condidicaoClick =false;
      }else {
        this.condidicaoClick= true;
      }
}

public onClikAddList(){
  this.list.push({nome:"Roger", idade:30});
}

public onclikEvenlist (event: number){
 this.list.splice(event, 1)
};



}

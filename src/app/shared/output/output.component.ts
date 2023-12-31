import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit  {

  @Output() public enviarDados = new EventEmitter ();

public list: Array <{nome: string, idade: number}> =[
 {nome:"Rogerio", idade:40 },
 {nome:"Alone", idade:30 },
{nome:"Depre", idade:29 }
]

public getDados(event: number){
this.enviarDados.emit(this.list[event]);

}

ngOnInit(): void {

}


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
   <app-diretivas-atributos></app-diretivas-atributos>
   <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
public destruir: boolean = true;

public destruirComponent(){
this.destruir = false;

}

 ngOnInit():void {}


}

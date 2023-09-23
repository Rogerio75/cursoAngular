import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [NewComponentComponent, InputComponent],
    exports: [NewComponentComponent, InputComponent  ],
    imports: [
    CommonModule
  ]
})
export class SharedModule {






}

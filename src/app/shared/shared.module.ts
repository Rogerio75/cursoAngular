import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { categoryPipe } from './pipes/categoria.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, categoryPipe],
  imports: [CommonModule, AppMaterialModule],

  exports: [
    ErrorDialogComponent,
    categoryPipe

  ],
})
export class SharedModule {




}

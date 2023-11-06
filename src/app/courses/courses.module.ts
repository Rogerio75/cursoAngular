import { CoursesService } from './services/courses.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    MatProgressSpinnerModule

  ],
  exports:[
    CoursesComponent

  ]
})
export class CoursesModule { }

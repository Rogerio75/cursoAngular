import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})




export class CoursesComponent implements OnInit {
ngOnInit(): void {



}

// coursesService =  new CoursesService;
public courses$: Observable <Course[]>;
//public courses: Course [] = [];
constructor( private coursesService: CoursesService    ){
//this.courses= []
//this.coursesService = new CoursesService();

this.courses$ = this.coursesService.list();
//this.coursesService.list().subscribe(courses => this.courses = courses);
}



public displayedColumns = ['name' ,'category' ];

}

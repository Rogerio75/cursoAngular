import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, tap } from 'rxjs';
import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private  readonly API = '/assets/fonteDados.json';


  constructor( private httpClient: HttpClient) { }

  list( )  {
    return  this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      // delay(4000),
       tap (course => console.log (course))
    );

}

}

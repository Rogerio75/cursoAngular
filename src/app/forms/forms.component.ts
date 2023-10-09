import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
public listComidas: Array<{comida: string}> =[
{comida : "x-salada"},
{comida : "x-picanha"},
{comida : "x-bacon"}
];



}

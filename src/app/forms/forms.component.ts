import { Component,  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
public listComidas: Array<{comida: string, preco: string}> =[
{comida : "x-salada", preco: "R$ 20,00"},
{comida : "x-picanha" , preco: "R$ 30,00" },
{comida : "x-bacon" , preco: "R$ 25,00" }
];

public submitForm(form: NgForm ){

if(form.valid){
  console.log(form.value);}


}


}

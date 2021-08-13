import { CepServiceService } from './cep-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CepAngular';

  constructor(private cepsService: CepServiceService){}

  consultaCep(valor:any, form:any){
    this.cepsService.buscar(valor?.value).subscribe((dados) => this.populaForm(dados, form));
 }

 populaForm(dados:any, form:any){
   form.setValue({
     cep: dados.cep,
     logradouro: dados.logradouro,
     bairro: dados.bairro,
     cidade: dados.localidade,
     uf: dados.uf
   })
 }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http:HttpClient) { }

  consultaCEP(cep:string){
    console.log(cep);
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}

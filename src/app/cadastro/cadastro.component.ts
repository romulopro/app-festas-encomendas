import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDados } from '../interfaces/usuario-dados';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  usuarioACadastrar: UsuarioDados = {
    nome: '',
    email: '',
    senha: '',
    cep: '',
    numeroResidencia: 0,
    complementoResidencia: 0,
    telefone: ''
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    throw new Error('Method not implemented.');
    }


  voltarParaLogin() {
    this.router.navigate(['/login']);
  }
}

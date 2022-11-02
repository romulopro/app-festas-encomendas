import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { AutenticacaoService } from '../services/autenticacao.service';


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
  constructor(private router:Router,
    private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    console.log(this.usuarioACadastrar);
    const usuarioLogin = {email : this.usuarioACadastrar.email, senha : this.usuarioACadastrar.senha};
      this.authService.cadastrar(usuarioLogin)
      .then((res) => {
          console.log(res);
          this.router.navigate(['/login']);
        }
      ).catch((error) => {
          console.log(error);
        }
      );
  }



  voltarParaLogin() {
    this.router.navigate(['/login']);
  }
}

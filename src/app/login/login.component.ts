import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
  cadastrando: boolean = false;
  mensagemSucesso: string = "";
  errors: string[] = [];
  loginForm: any;

  constructor(private router:Router, private authService: AutenticacaoService) { }

  preparaCadastrar(event: MouseEvent) {
    event.preventDefault();
    this.errors = [];
    this.cadastrando = true;
  }

  cancelaCadastrar() {
    this.cadastrando = false
  }

  cadastrar() {
    const usuarioLogin = {email : this.username, senha : this.password};
      this.authService.cadastrar(usuarioLogin)
      .then(() => {
          this.mensagemSucesso = "Cadastro realizado com sucesso!";
          this.cancelaCadastrar();
        }
      ).catch((error) => {
          this.errors = [error.message];
        }
      );
  }
 
  onSubmit() {
    console.log(this.username);
    const usuarioLogin = {email : this.username, senha : this.password};
    this.authService.logar(usuarioLogin).then(() => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      this.errors = [error.message];
    });
  }


  irParaTelaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  ngOnInit(): void {
  }


}
export class UsuarioLogin {
  email!: string;
  senha!: string;
}

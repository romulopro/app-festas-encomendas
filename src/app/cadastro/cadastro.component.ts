import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { UsuarioLogin } from '../interfaces/usuario-login';
import { AutenticacaoService } from '../services/autenticacao.service';
import { CadastroService } from '../services/cadastro.service';
import { ConsultaCepService } from '../services/consulta-cep.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

onSubmit() {
throw new Error('Method not implemented.');
}

  userId: any;
  usuarioACadastrar!: UsuarioDados;;
  rua = '';
  estado = '';
  bairro = '';
  cidade = '';
  constructor(private router:Router,
    private cadastroService: CadastroService,
    private authService: AutenticacaoService,
    private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
    this.usuarioACadastrar = new UsuarioDados();
  }

  async cadastrar() {
     this.authService.getAuth().currentUser.then((user) => {
      this.userId= user?.uid;
      this.usuarioACadastrar.id = this.userId;
      console.log(this.userId);
      this.cadastroService.userId = this.userId;
      this.cadastroService.cria(this.usuarioACadastrar);
    });
  }

  async pesquisarCep() {
    //should get cep data from viacep
    console.dir(this.usuarioACadastrar);
    this.consultaCepService.consultaCEP(this.usuarioACadastrar.cep).subscribe((data) => {
      console.log(data);
    }
    );  
  }
}

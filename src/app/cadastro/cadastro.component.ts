import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { UsuarioLogin } from '../interfaces/usuario-login';
import { viaCep } from '../interfaces/via-cep';
import { AutenticacaoService } from '../services/autenticacao.service';
import { CadastroService } from '../services/cadastro.service';
import { ConsultaCepService } from '../services/consulta-cep.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {



  public cadastroForm: FormGroup;



  userId: any;
  constructor(private router: Router,
    private cadastroService: CadastroService,
    private authService: AutenticacaoService,
    private consultaCepService: ConsultaCepService,
    private formBuider: FormBuilder) {
    this.cadastroForm = this.formBuider.group({

      cep: '',
      nome: '',
      numeroResidencia: 0,
      complementoResidencia: '',
      telefone: '',
      doces: this.formBuider.group({
        brigadeiro: false,
        beijinho: false,
        cajuzinho: false,
      }),
      massas: this.formBuider.group({
        prestigio: false,
        baunilha: false,
        chocolate: false,
        brigadeiro: false,
      }),
      recheios: this.formBuider.group({
        musseMaracuja: false,
        musseMorango: false,
      }),
      temas: this.formBuider.group({
        carros: false,
        times: false,
        princesas: false,
        superHerois: false,
        animais: false,
        dinossauros: false,
      })
    });

    this.authService.getAuth().currentUser.then((user) => {
      console.log(user?.uid);
      this.userId = user?.uid;
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.cadastroForm.patchValue({ userId: this.userId });
    this.cadastroService.dadosFornecedor = this.cadastroForm.value as UsuarioDados
    //this.cadastroService.cria(this.cadastroForm.value as UsuarioDados);
    this.router.navigate(['/dados-fornecedor']);
  }



  async deletaDados() {
    this.cadastroService.deletaDadosUsuario(this.userId).then(() => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
    }
    );
  }

  
}

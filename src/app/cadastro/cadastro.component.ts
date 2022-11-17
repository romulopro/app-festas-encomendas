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
  constructor(private router:Router,
    private cadastroService: CadastroService,
    private authService: AutenticacaoService,
    private consultaCepService: ConsultaCepService
    ,private formBuider: FormBuilder) { 
      this.cadastroForm = this.formBuider.group({
        userId : '',
        cep : '',
        nome : '',
        numeroResidencia : 0,
        complementoResidencia : '',
        telefone : '',
        doce :  this.formBuider.group({
          brigadeiro : false,
          beijinho : false,
          cajuzinho : false,
        }),
        massa : this.formBuider.group({
          prestigio : false,
          baunilha : false,
          chocolate : false,
          brigadeiro : false,
        }),
        recheio : this.formBuider.group({ 
          musseMaracuja : false,
          musseMorango : false,
        }),
        tema: this.formBuider.group({
          carros : false,
          times : false,
          princesas : false,
          superHerois : false,
          animais : false,
          dinossauros : false,
        })
      });

      this.authService.getAuth().currentUser.then((user) => {
        // this.cadastroForm.setValue({userId :user?.uid });
        console.log(user?.uid);
        this.userId = user?.uid;
        
      });
    }


  //   export class UsuarioDados {
  //     id!: string;
  //     nome!: string;
  //     cep!: string;
  //     numeroResidencia!: number;
  //     complementoResidencia!: number;
  //     telefone!: string;
  //     fazMassaPrestigio!: boolean;
  //     fazMassaBrigadeiro!: boolean;
  //     fazMassaBaunilha!: boolean;
  //     fazMassaChocolate!: boolean;
  //     fazRecheioMusseMaracuja!: boolean;
  //     fazRecheioMusseMorango!: boolean;
  //     fazCajuzinho!: boolean;
  //     fazBeijinho!: boolean;
  //     fazBrigadeiro!: boolean;
  //     fazTemaCarros!: boolean;
  //     fazTemaTimes!: boolean;
  //     fazTemaPrincesas!: boolean;
  //     fazTemaSuperHerois!: boolean;
  //     fazTemaAnimais!: boolean;
  //     fazTemaDinossauros!: boolean;
  // }
  ngOnInit(): void {

  }   

  onSubmit() {
    this.cadastroForm.patchValue({userId :this.userId });
    this.cadastroService.cria(this.cadastroForm.value);
  }

  async pesquisarCep() {
    //should get cep data from viacep
    //console.dir(this.cadastroForm.value);
    this.consultaCepService.consultaCEP(this.cadastroForm.value['cep']).subscribe((dados:any) => {
      
        //this.rua = dados.logradouro;
        document.getElementById('logradouro')?.setAttribute('value', dados.logradouro);
        document.getElementById('bairro')?.setAttribute('value', dados.bairro);
        document.getElementById('cidade')?.setAttribute('value', dados.localidade);
        document.getElementById('estado')?.setAttribute('value', dados.uf);

        // this.estado = dados.uf;
        // this.bairro = dados.bairro;
        //this.cidade = dados.localidade;
        console.log(dados);

  
    });
  }
}

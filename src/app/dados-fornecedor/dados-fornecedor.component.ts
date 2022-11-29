import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { AutenticacaoService } from '../services/autenticacao.service';
import { CadastroService } from '../services/cadastro.service';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-dados-fornecedor',
  templateUrl: './dados-fornecedor.component.html',
  styleUrls: ['./dados-fornecedor.component.css']
})
export class DadosFornecedorComponent implements OnInit {


  dadosFornecedor:UsuarioDados;
  constructor(private router: Router,
    protected cadastroService: CadastroService,
    private authService: AutenticacaoService,
    private consultaCepService: ConsultaCepService,
    ) { 
      this.dadosFornecedor = this.cadastroService.dadosFornecedor;
    }

  ngOnInit(): void {
    
  }

  criaFornecedor() {
    this.cadastroService.cria(this.dadosFornecedor).then(() => {
      console.log("Fornecedor criado com sucesso");
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
    });
  }

  async pesquisarCep() {
    //should get cep data from viacep
    this.consultaCepService.consultaCEP(this.dadosFornecedor.cep).subscribe((dados: any) => {
      document.getElementById('logradouro')?.setAttribute('value', dados.logradouro);
      document.getElementById('bairro')?.setAttribute('value', dados.bairro);
      document.getElementById('cidade')?.setAttribute('value', dados.localidade);
      document.getElementById('estado')?.setAttribute('value', dados.uf);
      console.log(dados);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { AutenticacaoService } from '../services/autenticacao.service';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ehFornecedor = false;
  dadosFornecedor?: UsuarioDados;
  constructor(private cadastroService: CadastroService,
    private authService: AutenticacaoService,
    private router: Router) { }


  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    console.log(this.cadastroService.userId);
    this.cadastroService.recuperaDadosUsuario(this.cadastroService.userId).subscribe({
      next: (dados: UsuarioDados) => {
        if (dados == null || dados == undefined) {
          this.ehFornecedor = false;
        }
        this.dadosFornecedor = dados;
        this.ehFornecedor = true;
      },
      error: () => {
        this.ehFornecedor = false;
      }
    });

  }
  logout() {
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
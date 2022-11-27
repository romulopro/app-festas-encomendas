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

  //userId: string;

  ehFornecedor = false;
  dadosFornecedor? : UsuarioDados;
Object: any;
  constructor(private cadastroService: CadastroService,
    private authService: AutenticacaoService,
    private router: Router) {}


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //this.userId = "";
  }




  ngOnInit(): void {
    console.log(this.cadastroService.userId);
    this.cadastroService.recuperaDadosUsuario(this.cadastroService.userId).subscribe({
      next: (dados:UsuarioDados) => {
        if(dados != null){
        for(let key in dados.doces){
          console.log(key);
        }
        console.log(dados);
        this.dadosFornecedor = dados;
        this.ehFornecedor = true;
      }else{
        this.ehFornecedor = false;
      }
      },
      error: (error) => {
        console.log(error);
        this.ehFornecedor = false;
      }
    });


    // this.cadastroService.usuarioEhFornecedor()
    //   .subscribe((dados) => {
    //     if (dados.exists) {
    //       console.log(dados);
    //       this.ehFornecedor = true;
    //       this.cadastroService.recuperaDadosUsuario(dados.id).subscribe((dados) => {
            
    //         this.dadosFornecedor = dados;
    //         console.log(this.dadosFornecedor);
    //         for(let key in this.dadosFornecedor.doce) {
    //           console.log(key);
    //         }
    //       }
    //       );
    //     }
    //   }
    //   );

  }
  logout() {
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
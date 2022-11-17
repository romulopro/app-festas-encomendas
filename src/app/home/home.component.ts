import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //userId: string;

  ehFornecedor : boolean = false;
  constructor(private cadastroService:CadastroService,
    private authService:AutenticacaoService,
    private router: Router) { }
      


  

  ngOnInit(): void {
    //should get user config from firebase
    // this.authService.getAuth().currentUser.then((user) => {
    //   // this.cadastroForm.setValue({userId :user?.uid });
    //   console.log(user?.uid);
    //   let userId = user?.uid;
    //   this.cadastroService.recuperaDadosUsuario(userId).subscribe((dados) => {
    //     console.log(dados.data());
    //   } );
    // });
    this.cadastroService.usuarioEhFornecedor().then((dados) => {
      if(dados.exists) {
        this.ehFornecedor = true;
        console.log("eh fornecedor");
      }
    }
    ).catch((error) => {
      this.ehFornecedor = false;
      console.log("nao eh fornecedor");
    });
}
logout() {
  console.log("logout");
  this.authService.logout();
  this.router.navigate(['/login']);
}}
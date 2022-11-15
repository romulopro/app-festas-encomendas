import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //userId: string;

  constructor(private cadastroService:CadastroService,
    private authService:AutenticacaoService) {
      

     }

  ngOnInit(): void {
    //should get user config from firebase
    this.authService.getAuth().currentUser.then((user) => {
      // this.cadastroForm.setValue({userId :user?.uid });
      console.log(user?.uid);
      let userId = user?.uid;
      this.cadastroService.recuperaDadosUsuario(userId).subscribe((dados) => {
        console.log(dados.data());
      } );
    });
}}
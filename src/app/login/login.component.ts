import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  cadastrando: boolean = false;
  mensagemSucesso: any;
  errors: any;
loginForm: any;

  preparaCadastrar() {
    
    this.errors = [];
    this.cadastrando = true;
    
  }

  cancelaCadastrar() {
    this.cadastrando = false
  }
  cadastrar() {
    throw new Error('Method not implemented.');
  }
 
  onSubmit() {
    throw new Error('Method not implemented.');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
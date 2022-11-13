import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { UsuarioLogin } from '../interfaces/usuario-login';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  
  constructor(private afa: AngularFireAuth) { }

  cadastrar(usuarioLogin: UsuarioLogin) {
    return this.afa.createUserWithEmailAndPassword(usuarioLogin.email, usuarioLogin.senha);
  }

  logar(usuarioLogin: UsuarioLogin) {
    return this.afa.signInWithEmailAndPassword(usuarioLogin.email, usuarioLogin.senha);
  }

  getAuth() {
    return this.afa;
  }
}

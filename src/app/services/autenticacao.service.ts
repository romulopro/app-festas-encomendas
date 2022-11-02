import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { UsuarioLogin } from '../interfaces/usuario-login';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  
  constructor(private afs: AngularFireAuth) { }

  cadastrar(usuarioLogin: UsuarioLogin) {
    return this.afs.createUserWithEmailAndPassword(usuarioLogin.email, usuarioLogin.senha);
  }

  logar(usuarioLogin: UsuarioLogin) {
    return this.afs.signInWithEmailAndPassword(usuarioLogin.email, usuarioLogin.senha);
  }

  getAuth() {
    return this.afs;
  }
}

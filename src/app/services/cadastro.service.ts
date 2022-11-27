import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  userId: any;

  constructor(private authService: AutenticacaoService, private db: AngularFirestore) {
    this.authService.getAuth().currentUser.then((user) => {
      this.userId = user?.uid;
    });
  }

  cria(fornecedor: UsuarioDados): Promise<any> {
    //should create usuario-dados in firebase
    return this.db.collection('fornecedores').doc(this.userId).set(fornecedor);
  }

  usuarioEhFornecedor() {
    return this.db.collection('fornecedores').doc(this.userId).get();
  }

  recuperaDadosUsuario(id: string):Observable<any> {
    //should get user config from firebase
    return this.db.collection('fornecedores').doc(id).valueChanges();
  }

  atualizaDadosUsuario(dados: UsuarioDados) {
    //should update user config from firebase
    return this.db.collection('fornecedores').doc(this.userId).update(dados);
  }

  deletaDadosUsuario(id: string) {
    //should delete user config from firebase
    return this.db.collection('fornecedores').doc(id).delete();
  }
}

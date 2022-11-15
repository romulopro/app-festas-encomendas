import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UsuarioDados } from '../interfaces/usuario-dados';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  userId: any;
  recuperaDadosUsuario(id: string | undefined) {
    //should get user config from firebase
    return this.db.collection('fornecedores').doc(id).get();
   
  }

  constructor(private authService: AutenticacaoService, private db:AngularFirestore) { 
    
  }

  cria(fornecedor: UsuarioDados): Promise<any> {
    //should create usuario-dados in firebase
    console.log(fornecedor);
    return this.authService.getAuth().currentUser.then((user) => {
      console.log(user?.uid);
      this.userId = user?.uid;
      return this.db.collection('fornecedores').doc(this.userId).set(fornecedor);
    });
      
  }
}

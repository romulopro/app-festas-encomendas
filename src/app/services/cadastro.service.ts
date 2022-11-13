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
  async recuperaDadosUsuario(id: string) {
    //should get user config from firebase
    // this.userId = await this.authService.getAuth().currentUser).uid;
    // console.log(this.userId);
  }

  constructor(private authService: AutenticacaoService, private db:AngularFirestore) { }

  cria(fornecedor: UsuarioDados){
    //should create usuario-dados in firebase
    console.log(fornecedor);
    return new Promise<any>((resolve, reject) =>{
      this.db.collection('usuario-dados').add(fornecedor)
      .then(resolve => {
        console.log(resolve);
        
      }, err => reject(err));
    });
  }
}

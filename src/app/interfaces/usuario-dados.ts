export class UsuarioDados {
    nome!: string;
    cep!: string;
    numeroResidencia!: number;
    complementoResidencia!: number;
    telefone!: string;
    email!: string;
    redesSociais!: string;
    doces!:{ 
        beijinho: boolean;
        brigadeiro: boolean;
        cajuzinho: boolean;
    }
    massas!:{
        baunilha: boolean;
        brigadeiro: boolean;
        chocolate: boolean;
        prestigio: boolean;
    }
    recheios!:{
        musseMaracuja: boolean;
        musseMorango: boolean;
    } 
    temas!:{
        animais: boolean;
        carros: boolean;
        dinossauros: boolean;
        princesas: boolean;
        superHerois: boolean;
        times: boolean;
    }   
}


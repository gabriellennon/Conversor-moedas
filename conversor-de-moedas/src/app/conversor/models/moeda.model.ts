export class Moeda {

    //o ? depois do nome da variável está informando que ela é opcional
    constructor(
        public sigla?: string,
        public descricao?: string
    ){}
}
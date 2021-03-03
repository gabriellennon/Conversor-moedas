export class Conversao {
    [x: string]: any;

    constructor(
        public moeda?: string,
        public moedaPara?: string,
        public valor?: number
    ){}
}
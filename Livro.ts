export class Livro {
    codigo: number;
    codEditora: number;
    título: string;
    resumo: string;
    autores: string[];

    constructor(codigo: number, codEditora: number, título: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.título = título;
        this.resumo = resumo;
        this.autores = autores;
    }
}
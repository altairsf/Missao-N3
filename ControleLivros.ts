import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, "Título 1", "Resumo 1", ["Autor 1"]),
    new Livro(2, 2, "Título 2", "Resumo 2", ["Autor 2"]),
    new Livro(3, 3, "Título 3", "Resumo 3", ["Autor 3"])
];

export class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const maxCodigo = livros.reduce((max, livro) => Math.max(max, livro.codigo), 0);
        livro.codigo = maxCodigo + 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
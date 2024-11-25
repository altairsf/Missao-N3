import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
    new Editora(1, 'Editora 1'),
    new Editora(2, 'Editora 2'),
    new Editora(3, 'Editora 3')
];

export class ControleEditora {
    getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.filter(e => e.codEditora === codEditora);
        return editora.length > 0 ? editora[0].nome : undefined;
    }

    getEditoras(): Array<Editora> {
        return editoras;
    }
}
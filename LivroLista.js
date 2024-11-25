import React, { useEffect, useState } from "react";
import { ControleLivros } from "./ControleLivros";
import { ControleEditora } from "./ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    
    return (
        <tr>
            <td>{livro.título}</td>
            <td>{livro.resumo}</td>
            <td>
                {livro.autores.map((autor, index) => <div key={index}>{autor}</div>)}
            </td>
            <td>{nomeEditora}</td>
            <td>
                <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
                    Excluir
                </button>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            const livrosObtidos = controleLivro.obterLivros();
            setLivros(livrosObtidos);
            setCarregado(true);
        }
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setLivros(livros.filter(livro => livro.codigo !== codigo));
        setCarregado(false);  // Força o redesenho
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                        <th>Editora</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;

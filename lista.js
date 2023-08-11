class Tarefa {
    constructor(descricao, autor, departamento, importancia) {
        this.descricao = descricao;
        this.autor = autor;
        this.departamento = departamento;
        this.importancia = importancia;
        this.valor = null;
        this.duracao = null;
    }
}

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    incluirTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    excluirTarefaConcluida(indice) {
        this.tarefas.splice(indice, 1);
    }

    adicionarDetalhe(indice, detalhe, valor) {
        this.tarefas[indice][detalhe] = valor;
    }

    listarTarefasPorImportancia() {
        return this.tarefas
            .slice()
            .sort((a, b) => b.importancia - a.importancia)
            .map(tarefa => tarefa.descricao);
    }
}

// Exemplo de uso
const lista = new ListaDeTarefas();
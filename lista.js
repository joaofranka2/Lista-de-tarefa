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

lista.incluirTarefa(new Tarefa("organizar relatório semanal", "murilo", "Contabilidade", 5));
lista.incluirTarefa(new Tarefa("reavaliar proposta de projeto", "julia", "Desenvolvimento", 4));
lista.incluirTarefa(new Tarefa("marcar reunião com cliente", "rafael", "Vendas", 3));

lista.adicionarDetalhe(0, 'valor', 200.00);
lista.adicionarDetalhe(1, 'duracao', "3 horas");

lista.excluirTarefaConcluida(2);

const tarefasOrdenadasPorImportancia = lista.listarTarefasPorImportancia();

console.log("Lista de Tarefas por Ordem de Importância:");
tarefasOrdenadasPorImportancia.forEach((descricao, indice) => {
    console.log(`${indice + 1}. ${descricao}`);
});
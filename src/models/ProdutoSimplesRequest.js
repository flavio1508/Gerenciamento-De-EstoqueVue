export default class ProdutoSimplesRequest {
    constructor() {
        this.idDoAdministrador = null;
        this.nome = null;
        this.descricao = null;
        this.valor = null;
        this.dataLimite = null;
        this.quantidadeDeProduto = null;
        this.administrador = null;
    }

    populate(obj) {
        this.idDoAdministrador = obj.idDoAdministrador;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.valor = obj.valor;
        this.dataLimite = obj.dataLimite;
        this.quantidadeDeProduto = obj.quantidadeDeProduto;
        this.administrador = null;

    }

    toJson() {
        return {
            idDoAdministrador: this.idDoAdministrador,
            nome: this.nome,
            descricao: this.descricao,
            valor: this.valor,
            dataLimite: this.dataLimite,
            quantidadeDeProduto: this.quantidadeDeProduto,
            administrador: this.administrador

        };
    }
}
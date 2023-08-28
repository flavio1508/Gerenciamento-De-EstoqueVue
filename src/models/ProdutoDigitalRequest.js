export default class ProdutoDigitalRequest {
    constructor() {
        this.idDoAdministrador = null;
        this.nome = null;
        this.descricao = null;
        this.valor = null;
        this.dataLimite = null;
        this.urlDownload = null;
        this.administrador = null;
    }

    populate(obj) {
        this.idDoAdministrador = obj.idDoAdministrador;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.valor = obj.valor;
        this.dataLimite = obj.dataLimite;
        this.urlDownload = obj.urlDownload;
        this.administrador = obj.administrador;
    }

    toJson() {
        return {
            idDoAdministrador: this.idDoAdministrador,
            nome: this.nome,
            descricao: this.descricao,
            valor: this.valor,
            dataLimite: this.dataLimite,
            urlDownload: this.urlDownload,
            administrador: this.administrador
        };
    }
}
export default class ProdutoDigitalResponse {
    constructor() {
      this.id = null;
      this.nome = null;
      this.descricao = null;
      this.valor = null;
      this.dataLimite = null;
      this.urlDownload = null;
      this.administrador = null;
    }
  
    populate(obj) {
      this.id = obj.id;
      this.nome = obj.nome;
      this.descricao = obj.descricao;
      this.valor = obj.valor;
      this.dataLimite = obj.dataLimite;
      this.urlDownload = obj.urlDownload;
      this.administrador = obj.administrador;
    }
  
    toJson() {
      return {
        id: this.id,
        nome: this.nome,
        descricao: this.descricao,
        valor: this.valor,
        dataLimite: this.dataLimite,
        urlDownload: this.urlDownload,
        administrador: this.administrador
      };
    }
  }
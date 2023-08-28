export default class AdministradorResponse {
    constructor() {
      this.id = null;
      this.nome = null;
      this.email = null;
      this.senha = null;
    }
  
    populate(obj) {
      this.id = obj.id;
      this.nome = obj.nome;
      this.email = obj.email;
      this.senha = obj.senha;
    }
  
    toJson() {
      return {
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };
    }
  }
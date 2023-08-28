export default class AdministradorRequest {
    constructor() {
      this.nome = null;
      this.email = null;
      this.senha = null;
    }
  
    populate(obj) {
      this.nome = obj.nome;
      this.email = obj.email;
      this.senha = obj.senha;
    }
  
    toJson() {
      return {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };
    }
  }
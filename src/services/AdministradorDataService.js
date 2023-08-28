import http from '../http-commons';

class AdministradorDataService {
    async cadastrar(administrador) {
        let resposta = await http.post('/administrador', administrador);
        return resposta.data;
    }

    async login(login) {
        let resposta = await http.post('/autenticacao/entrar', login);
        return resposta.data;
    }
    async buscarPorId(id) {
        let resposta = await http.get('/administrador/' + id);
        return resposta.data;
    }

    async alterar(id, administrador) {
        let resposta = await http.put(`/administrador/` + id, administrador);
        return resposta.data;
    }

    async remover(id) {
        await http.delete(`/administrador/` + id);
    }
}

export default new AdministradorDataService();

import { createRouter, createWebHistory } from 'vue-router';
import PaginaIncialView from '../views/PaginaIncialView.vue';
import CadastroProdutoSimplesView from '../views/CadastroProdutoSimplesView.vue';
import CadastroProdutoDigitalView from '../views/CadastroProdutoDigitalView.vue';
import ListagemProdutoSimplesView from '../views/ListagemProdutoSimplesView.vue';
import ListagemProdutoDigitalView from '../views/ListagemProdutoDigitalView.vue';
import CadastroAdministradorView from '../views/CadastroAdministradorView.vue';
import LoginView from '../views/LoginView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:'login',
      component: LoginView

    },
   {
    path:"/pagina/inicial",
    name:'pagina-inicial',
    component: PaginaIncialView
   },
   {
    path:"/cadastro/produto/digital",
    name:'cadastro-produto-digital',
    component: CadastroProdutoDigitalView
   },
   {
    path:"/cadastro/produto/simples",
    name:'cadastro-produto-simples',
    component: CadastroProdutoSimplesView
   },
   {
    path:"/listagem/produto/digital",
    name:'listagem-produto-digital',
    component: ListagemProdutoDigitalView
   },
   {
    path:"/listagem/produto/simples",
    name:'listagem-produto-simples',
    component: ListagemProdutoSimplesView
   },
   {
    path:"/cadastro/administrador",
    name:'cadastro-administrador',
    component: CadastroAdministradorView
   }
  
  
  
  ]
})

export default router

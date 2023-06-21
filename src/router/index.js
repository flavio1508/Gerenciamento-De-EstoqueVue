import { createRouter, createWebHistory } from 'vue-router';
import PaginaIncialView from '../views/PaginaIncialView.vue';
import HabilidadesView from '../views/HabilidadesView.vue';
import SobreView from '../views/SobreView.vue';
import ContatoView from '../views/ContatoView.vue';
import ProjetoView from '../views/ProjetoView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/",
    name:'pagina-inicial',
    component: PaginaIncialView
   },
   {
    path:"/habilidades",
    name:'habilidade',
    component: HabilidadesView
   },
   {
    path:"/sobre",
    name:'sobre',
    component: SobreView
   },
   {
    path:"/contato",
    name:'contato',
    component: ContatoView
   },
   {
    path:"/projetos",
    name:'projetos',
    component: ProjetoView
   },
  
  ]
})

export default router

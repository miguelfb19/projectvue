import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; //importar el router de vue

//Importar los componentes
import centralContent from "./components/centralContent.vue";
import blogComponent from "./components/Blog.vue";
import formularioComponent from "./components/Formulario.vue";
import pagina1Component from "./components/Pagina1.vue";
import pagina2Component from "./components/Pagina2.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import peliculasComp from "./components/peliculas.vue";
import buscadorComponent from "./components/buscadorComponent.vue";
import articleDetails from "./components/articleDetails.vue";
import createArticle from "./components/createArticle.vue";
import editArticle from "./components/editArticle.vue";

//Crear las rutas
const routes = [
  { path: "/home", component: centralContent },
  { path: "/", component: centralContent },
  { path: "/peliculas", component: peliculasComp },
  { path: "/blog", component: blogComponent },
  { path: "/formulario", component: formularioComponent },
  { path: "/pagina1/:id?", name: "pagina1", component: pagina1Component },
  { path: "/pagina2", component: pagina2Component },
  { path: "/buscador/:searchString", component: buscadorComponent },
  { path: "/article/:id", name: "article", component: articleDetails },
  { path: "/createArticle", component: createArticle },
  { path: "/edit/:id", component: editArticle},
  { path: "/:pathMatch(.*)*", component: ErrorComponent }, //el '/:pathMatch(.*)*' sirve para crear una ruta comodín (se usa comunmente para crear pagina de error)
  //{path: '/nombreRuta', component: nombreComponente},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");

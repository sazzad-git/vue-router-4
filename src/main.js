// import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import RightSidebar from "./components/RightSidebar.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import PostComponent from "./pages/PostComponent.vue";
import Posts from "./pages/Posts.vue";
import ProductComponent from "./pages/ProductComponent.vue";
import SinglePost from "./pages/SinglePost.vue";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      // short for LeftSidebar: LeftSidebar
      LeftSidebar: About,
      // they match the `name` attribute on `<router-view>`
      RightSidebar,
      //   Header,
    },
  },
  {
    path: "/about",
    components: {
      default: About,
      // short for LeftSidebar: LeftSidebar
      RightSidebar: LeftSidebar,
      // they match the `name` attribute on `<router-view>`
      LeftSidebar: RightSidebar,
      //   Header,
    },
  },
  { path: "/:productName+", component: ProductComponent },
  { path: "/:id(\\d+)", component: PostComponent },
  {
    path: "/articles",
    name: "posts",
    components: {
      default: Posts,
      //   Header,
    },
    children: [{ path: ":id", name: "singlePost", component: SinglePost }],
  },
  { path: "/posts/:id", component: SinglePost },
  { path: "/:pathMach(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

// import "./assets/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import RightSidebar from "./components/RightSidebar.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import PostComponent from "./pages/PostComponent.vue";
import Posts from "./pages/Posts.vue";
import SearchUser from "./pages/SearchUser.vue";
import SinglePost from "./pages/SinglePost.vue";

const routes = [
  //   {
  //     path: "/",
  //     components: {
  //       default: Home,
  //       // short for LeftSidebar: LeftSidebar
  //       LeftSidebar: About,
  //       // they match the `name` attribute on `<router-view>`
  //       RightSidebar,
  //       //   Header,
  //     },
  //   },
  {
    path: "/",
    component: Home,
    // props: { name: "Sazzad web dev" },
    // beforeEnter(to, from) {
    //   console.log("Before Enter");
    // },
    beforeEnter: [auth1, auth2],
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
    props: { default: true },
  },
  {
    path: "/search",
    component: SearchUser,
    props: (route) => ({ query: route.query.Q }),
  },

  //   { path: "/:productName+", component: ProductComponent },
  { path: "/:id(\\d+)", component: PostComponent },
  {
    path: "/articles",
    name: "posts",
    components: {
      default: Posts,
      //   Header,
    },
    children: [
      { path: ":id", name: "singlePost", component: SinglePost, props: true },
    ],
  },
  { path: "/posts/:id", component: SinglePost },
  { path: "/:pathMach(.*)", component: NotFound },
];

function auth1(to, from) {
  console.log("Auth1");
  return true;
}
function auth2() {
  console.log("Auth2");
  return true;
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});

function authAccess(to) {
  console.log("accessing");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (to.path.includes("articles") || to.path.includes("notfound")) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
}

router.beforeEach(async (to, from, next) => {
  console.log("beforeEach");
  //   const hasAccess = await authAccess(to);
  //   if (!hasAccess) next({ path: "/notfound" });
  //   else next(true);
  next(true);
});

// beforeEnter
router.afterEach((to, form) => {
  console.log("after each");
});

// beforeResolve
router.beforeResolve(async (to) => {
  console.log("before Resolve");
  if (to.path.includes("/articles")) {
    await authAccess(to);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    app.provide("postData", await response.json());
  }
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

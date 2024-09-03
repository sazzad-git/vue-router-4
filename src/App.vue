<template>
  <HeaderComponent></HeaderComponent>
  <!-- <router-view name="Header"></router-view> -->
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <router-view name="LeftSidebar"></router-view>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
      <div class="col-md-2">
        <router-view name="RightSidebar"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>
<!-- template -->
<!-- <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
<!-- <div>
    <ul>
      <li><router-link to="/">Go to Home</router-link></li>
      <li><router-link to="/about">Go to About</router-link></li>
      <li><router-link to="/abousdtsdfd">Not Found</router-link></li>
    </ul>
  </div>
  <div> -->
<!-- <component :is="currentView"></component> -->
<!-- <router-view />
  </div>
</template> -->

<!-- <script setup>
import { computed, ref } from "vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

const routes = {
  "/": Home,
  "/about": About,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script> -->

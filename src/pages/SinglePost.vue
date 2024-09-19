<template>
  <div>Single Post {{ $route.params.id }}</div>

  <div v-if="post">
    <div>{{ post.id }}</div>
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
  </div>

  <div>
    <!-- <router-link :to="{ name: 'posts' }">Back</router-link> -->
    <button @click="onBackClick">Back to Post</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps({
  id: String,
});
console.log(props);
console.log(route.params);

const post = ref(null);

const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  post.value = await response.json();
};

getPost(props.id);
onBeforeRouteUpdate((to, from) => {
  getPost(to.params.id);
});

// watch(() => route.params, getPost, { immediate: true });
// watchEffect(getPost);

// getPost();

const onBackClick = () => {
  router.push({ name: "posts" });
  //   router.go(-1);
};
</script>

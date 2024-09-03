<template>
  <div class="row">
    <div class="col-md-8">
      <div>Posts Component</div>

      <table class="table table-striped" v-if="posts.length">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td>
              <!-- <router-link :to="{ name: 'singlePost', params: { id: post.id } }"
                >View Post</router-link
              > -->

              <button @click="onPostsClick(post.id)">View Post</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const posts = ref([]);

const router = useRouter();

onMounted(() => {
  fetchPosts();
});

const fetchPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  posts.value = await response.json();
};

const onPostsClick = (postId) => {
  //   router.push({ name: "singlePost", params: { id: postId } });
  router.push({ path: `/articles/${postId}` });
  //   router.replace({ path: `/articles/${postId}` });
  //   router.go(-1);
};
</script>

<template>
  <div>About Page</div>
  <div>{{ counter.count }}</div>
</template>
<script setup>
import { useCounterStore } from "../stores/counter.js";
const props = defineProps(["id"]);
const counter = useCounterStore();

console.log("about page");
console.log(props);
</script>

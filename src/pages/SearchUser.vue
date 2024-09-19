<template>
  <div>Search User</div>

  <div>{{ props.query }}</div>
</template>

<script setup>
const props = defineProps(["query"]);
console.log(props);
</script>

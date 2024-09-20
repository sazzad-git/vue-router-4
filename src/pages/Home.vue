<template>
  <div>Home Page</div>
  <div>Counter: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <div>doubleCountPlusOne: {{ doubleCountPlusOne(3) }}</div>
  <div>User with 1: {{ getUserById(1).name }}</div>
  <div>Name:{{ name }}</div>
  <!-- <div>Double value {{ doubleValue }}</div> -->
  <div>
    <button @click="increment()">Increment</button>
    <button @click="add()">Increment</button>
    <button @click="counter.$reset">Reset</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counter = useCounterStore();

const { count, doubleCount, name, doubleCountPlusOne, getUserById } =
  storeToRefs(counter);
const { increment } = counter;

// function $reset() {
//   count.value = 0;
//   counter.name = "Sazzad Web deb";
// }

counter.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});

function add() {
  counter.$patch({
    count: counter.count + 1,
    name: Math.random() + "dsds",
  });
  // counter.count++;
  // counter.name = Math.random() + "dsds";
}
</script>

<!--  
<script>
import { useCounterStore } from "@/stores/counter";
import { mapActions, mapWritableState } from "pinia";

export default {
  computed: {
    ...mapWritableState(useCounterStore, ["count", "doubleCount", "name"]),
    // ...mapState(useCounterStore, {
    //   count: "count",
    //   doubleCount: "doubleCount",
    //   doubleValue: (state) => state.count + 3,
    // }),
  },
  mounted() {
    this.$subscribe((mutation, state) => {
      console.log(mutation);
      console.log(state);
    });
  },
  methods: {
    ...mapActions(useCounterStore, [
      "increment",
      "$reset",
      "$patch",
      "$subscribe",
    ]),
    add() {
      this.$patch({
        count: this.count + 1,
        name: Math.random() + "dsds",
      });
      // this.count++;
      // this.name = Math.random() + "dsds";
    },
  },
};
</script> -->

<!-- 
<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter.js";
const props = defineProps(["name"]);
const counter = useCounterStore();

// pinia store destructuring method
// const { count, doubleCount } = storeToRefs(counter);

// This is not valid destructuring pinia store
// const count = counter.count;
// const { count, doubleCount } = counter;

//another cenario
const count = computed(() => counter.count);
const doubleCount = computed(() => counter.doubleCount);

const { increment } = counter;

console.log(props);
</script>
 -->

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";

// options Api
// export const useCounterStore = defineStore("counterStore", {
//   state: () => {
//     return {
//       count: 0,
//       name: "Sazzad web dev",
//     };
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2,
//     doubleCountPlusOne() {
//       return this.doubleCount + 1;
//     },
//   },

//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// setup Function composition api
export const useCounterStore = defineStore("counterStore", () => {
  const count = ref(0);
  const name = ref("Sazzad Web dev");

  const doubleCount = computed(() => count.value * 2);

  const userStore = useUserStore();

  //   const doubleCountPlusOne = computed(() => {
  //     return doubleCount.value + 1;
  //   });

  const doubleCountPlusOne = computed(() => {
    return (value) => {
      return value * doubleCount.value;
    };
  });

  const getUserById = computed(() => {
    return (id) => userStore.users.find((user) => user.id === id);
  });

  function increment() {
    count.value++;
  }

  function $reset() {
    count.value = 0;
    name.value = "Sazzad Web deb";
  }

  return {
    count,
    doubleCount,
    name,
    increment,
    $reset,
    doubleCountPlusOne,
    getUserById,
  };
});

// export const useCounterStore = defineStore("counter", {
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

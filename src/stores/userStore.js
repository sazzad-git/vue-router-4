import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([
    { id: 1, name: "Sazzad" },
    { id: 2, name: "anwar" },
  ]);

  return { users };
});

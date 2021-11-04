<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const testState = computed(() => store.state.test);
    const testGetters = computed(() => store.getters.getTest);
    const testIncrement = () => store.commit("ADD_TEST", 10);
    const testActions = () => store.dispatch("asyncTest", 20);

    return {
      testState,
      testGetters,
      testIncrement,
      testActions,
    };
  },
};
</script>

<template>
  <h1>Home</h1>
  <p>store state: {{ testState }}</p>
  <p>store getters: {{ testGetters }}</p>
  <div>
    <button @click="testIncrement" type="button">store mutations +10</button>
  </div>
  <div>
    <button @click="testActions" type="button">store actions +20</button>
  </div>
</template>

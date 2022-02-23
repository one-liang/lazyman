<script>
import axios from 'axios';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    axios
      .get('https://gist.motc.gov.tw/gist_api/V3/Map/Basic/Bus/Route/City/Keelung?$format=JSON')
      .then((res) => {
        console.log('axios: ', res.data);
      });
    console.log(import.meta.env.VITE_APP_TITLE);
    const store = useStore();

    const testState = computed(() => store.state.test);
    const testGetters = computed(() => store.getters.getTest);
    const testIncrement = () => store.commit('ADD_TEST', 10);
    const testActions = () => store.dispatch('asyncTest', 20);

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
    <button type="button" @click="testIncrement">store mutations +10</button>
  </div>
  <div>
    <button type="button" @click="testActions">store actions +20</button>
  </div>
</template>

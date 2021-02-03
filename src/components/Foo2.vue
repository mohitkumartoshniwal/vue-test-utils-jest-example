<template>
  <button @click="fetchResults">{{ value }}</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      value: null,
    };
  },

  methods: {
    async fetchResults() {
      const response = await axios.get("mock/service");
      this.value = response.data;
    },
  },
};
</script>

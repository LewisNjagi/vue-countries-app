<template>
  <div id="app">
    <MazPhoneNumberInput v-model="phoneNumber" />
  </div>
</template>

<script>
import { MazPhoneNumberInput } from "maz-ui";
export default {
  components: { MazPhoneNumberInput },
  data() {
    return {
      phoneNumber: null,
    };
  },
};
</script>

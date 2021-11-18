<template>
  <div id="app">
    <b-container>
      <h2>Validate Phone Number</h2>
      <MazPhoneNumberInput v-model="phoneNumber" />
    </b-container>
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

<template>
  <div id="phone">
    <b-container>
      <h2 class="pt-3" style="font-family: 'Montserrat', sans-serif">
        Validate Phone Number
      </h2>
      <MazPhoneNumberInput v-model="phoneNumber" class="pt-4" />
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

<style scoped>
#phone {
  background-color: rgb(250, 250, 250);
}
</style>

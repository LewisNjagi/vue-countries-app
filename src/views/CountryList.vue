<template>
  <div class="home">
    <b-container>
      <b-row align-v="center">
        <CountryCard></CountryCard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryCard from "@/components/CountryCard.vue";

export default {
  name: "CountryList",
  components: {
    CountryCard,
  },
  data() {
    return {
      countries: null,
    }
  },
};
</script>

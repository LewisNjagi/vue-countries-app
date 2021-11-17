<template>
  <div class="home">
    <b-container>
      <b-row>
        <CountryCard
          v-for="country in countries"
          :key="country.id"
          :country="country"
          :name="country.name.official"
          :flags="country.flags.png"
        ></CountryCard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryCard from "@/components/CountryCard.vue";
import CountryService from "@/services/CountryService.js";

export default {
  name: "CountryList",
  components: {
    CountryCard,
  },
  data() {
    return {
      countries: null,
    };
  },
  created() {
    CountryService.getCountries()
      .then((response) => {
        this.countries = response.data;
        console.log("countries:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

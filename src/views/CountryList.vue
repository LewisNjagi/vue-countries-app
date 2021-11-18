<template>
  <div class="home">
    <b-container>
      <h2 class="text-left pt-2">Countries</h2>
      <b-form-input
        type="search"
        placeholder="Search for a country..."
        v-model="search"
      ></b-form-input>
      <b-row cols="4">
        <CountryCard
          v-for="country in filteredCountries"
          :key="country.id"
          :country="country"
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
      countries: [],
      search: "",
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
  computed: {
    filteredCountries: function () {
      return this.countries.filter((country) => {
        return country.name.common.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
.home {
  background-color: rgb(250, 250, 250);
}
</style>

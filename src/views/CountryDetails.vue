<template>
  <div class="home">
    <b-container>
      <b-row cols="4">
        <CountryCard
          v-for="country in country"
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
  name: "CountryDetails",
  components: {
    CountryCard,
  },
  props: ["name"],
  data() {
    return {
      country: null,
    };
  },
  created() {
    CountryService.getCountry(this.name)
      .then((response) => {
        this.country = response.data;
        console.log("country:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

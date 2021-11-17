<template>
  <div class="hello">
    <b-col>
      <div>
        <b-card class="mt-3">
          <b-card-img :src="country.flags.png" alt="Image" top></b-card-img>
          <b-card-body>
            <b-card-title>{{ country.name.official }}</b-card-title>
            <b-card-text v-if="country.capital"
              >Capital City: {{ country.capital[0] }}</b-card-text
            >
            <b-card-text>Population: {{ country.population }} </b-card-text>

            <router-link
              :to="{
                name: 'CountryDetails',
                params: { name: country.name.common },
              }"
            >
              <b-button variant="primary">View</b-button>
            </router-link>
          </b-card-body>
        </b-card>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
  <div class="hello">
    <b-col>
      <div>
        <b-card class="mt-3" style="font-family: 'Montserrat', sans-serif">
          <b-card-img :src="country.flags.png" alt="Image" top></b-card-img>
          <b-card-body>
            <b-card-title
              ><strong>{{ country.name.official }}</strong></b-card-title
            >
            <b-card-text v-if="country.capital"
              ><strong>Capital:</strong> {{ country.capital[0] }}</b-card-text
            >
            <b-card-text
              ><strong>Population: </strong> {{ country.population }}
            </b-card-text>
            <b-card-text
              ><strong>Region: </strong> {{ country.region }}
            </b-card-text>
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

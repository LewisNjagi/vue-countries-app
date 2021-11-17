<template>
  <div class="hello">
    <b-col>
      <div>
        <b-card
          :title="name"
          :img-src="flags"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text v-if="country.capital"
            >Capital City: {{ country.capital[0] }}</b-card-text
          >

          <b-button href="#" variant="primary">Go somewhere</b-button>
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
    name: {
      type: Object,
      required: true,
    },
    flags: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

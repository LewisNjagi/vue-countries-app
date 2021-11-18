<template>
  <div class="home">
    <b-container v-for="country in country" :key="country.id">
      <h2 class="text-left pt-2">{{ country.name.common }}</h2>
      <hr />
      <b-row class="mt-2">
        <b-col>
          <p>
            {{ country.name.common }}, officially the
            {{ country.name.official }}, is a country in
            {{ country.subregion }}. At {{ country.area }} square kilometres .
            With a population of more than {{ country.population }} people in
            the 2020 census. {{ country.name.common }}'s capital city is
            {{ country.capital[0] }}. {{ country.name.common }}'s start of the
            week is on a {{ country.startOfWeek }}.
          </p>
          <div>
            <a :href="country.maps.googleMaps" target="_blank">
              <b-img
                src="https://d3j021pzfm19r2.cloudfront.net/wp-content/webp-express/webp-images/uploads/2020/02/google-maps-logo-696x392.jpg.webp"
                fluid
                alt="Responsive image"
              ></b-img>
            </a>
          </div>
        </b-col>
        <b-col cols="12" md="auto">
          <div>
            <b-card
              no-body
              class="overflow-hidden text-center"
              style="max-width: 540px"
              :header="country.name.official"
            >
              <b-list-group flush>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>Flag</strong></b-col>
                    <b-col md="6">
                      <b-card-img
                        :src="country.flags.png"
                        alt="Image"
                        width="100%"
                        height="100%"
                        top
                      ></b-card-img>
                    </b-col>
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>Court of Arms</strong></b-col>
                    <b-col md="6">
                      <b-card-img
                        :src="country.coatOfArms.png"
                        alt="Image"
                        width="100%"
                        height="100%"
                        top
                      ></b-card-img>
                    </b-col>
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6" ><strong>Capital City</strong></b-col>
                    <b-col md="6"
                      >{{ country.capital[0] }} <br />
                      Latitude: {{ country.capitalInfo.latlng[0] }} <br />
                      Longitude: {{ country.capitalInfo.latlng[1] }}</b-col
                    >
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>Driving side</strong></b-col>
                    <b-col md="6">{{ country.car.side }}</b-col>
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>Time Zone</strong></b-col>
                    <b-col md="6">{{ country.timezones[0] }}</b-col>
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>Calling Code</strong></b-col>
                    <b-col md="6"
                      >{{ country.idd.root
                      }}{{ country.idd.suffixes[0] }}</b-col
                    >
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>ISO 3166 code</strong></b-col>
                    <b-col md="6">{{ country.cca2 }}</b-col>
                  </b-row>
                </b-list-group-item>
                <b-list-group-item>
                  <b-row>
                    <b-col md="6"><strong>Internet TLD</strong></b-col>
                    <b-col md="6">{{ country.tld[0] }}</b-col>
                  </b-row>
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryService from "@/services/CountryService.js";

export default {
  name: "CountryDetails",
  components: {},
  props: ["name"],
  data() {
    return {
      country: [],
    };
  },
  created() {
    CountryService.getCountry(this.name)
      .then((response) => {
        this.country = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.home {
  background-color: rgb(250, 250, 250);
  font-family: "Montserrat", sans-serif;
}
</style>

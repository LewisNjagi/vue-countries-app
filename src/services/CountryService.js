import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCountries() {
    return apiClient.get("/all");
  },
  getCountry(name) {
    return apiClient.get("/name/" + name);
  }
};

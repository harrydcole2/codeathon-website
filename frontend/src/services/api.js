import axios from "axios";

/* eslint-disable no-undef */
const instance = axios.create({
  baseURL: /*process.env.PRODUCTION_APIURL ||*/ "http://localhost:8080", //TODO: somehow we need this variable in there
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

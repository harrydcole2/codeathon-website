import axios from "axios";
import fakeDatabase from "./fakeDatabase.json";

export const instance = axios.create({
  baseURL: "localhost:8080", //TODO: replace with application config url instead of hardcoding; make this the default
  headers: {
    "Content-Type": "application/json",
  },
});

const fakeInstance = {
  get: (url) => {
    if (url === "/blogPosts") {
      return fakeDatabase.blogPosts;
    } else if (url === "/books") {
      return fakeDatabase.books;
    }
  },
};

export default fakeInstance;

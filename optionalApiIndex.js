import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { data } from "./data.js";

const App = {
  data() {
    return {
      products: data,
      product: null,
    };
  },
  methods: {
    checkDetail(id) {
      this.product = this.products.find((pro) => pro.id === id);
    },
  },
};

const app = createApp(App);
app.mount("#app");

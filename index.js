import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { data } from "./data.js";

const App = {
  setup() {
    const products = ref(data);
    const product = ref(null);

    const checkDetail = (id) => {
      product.value = products.value.find((pro) => pro.id === id);
    };

    return { products, product, checkDetail };
  },
};

const app = createApp(App);
app.mount("#app");

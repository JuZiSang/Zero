import Vue from "vue";
import { VuetifyUseOptions } from "vuetify";
import { directives, transitions, Vuetify } from "vuetify-tsx";
import "material-design-icons-iconfont/dist/material-design-icons.css";

const options: VuetifyUseOptions = {
  directives,
  components: {
    transitions
  }
};

Vue.use(Vuetify, options);

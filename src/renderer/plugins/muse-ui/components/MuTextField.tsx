import { ofType } from "vue-tsx-support";

export default ofType<any, any>().convert(
  require("muse-ui/es5/TextField").default
);

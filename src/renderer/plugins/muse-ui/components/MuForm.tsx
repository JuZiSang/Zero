import { ofType } from "vue-tsx-support";

export const MuForm = ofType<any, any>().convert(
  require("muse-ui/es5/Form").Form
);
export const MuFormItem = ofType<any, any>().convert(
  require("muse-ui/es5/Form").FormItem
);

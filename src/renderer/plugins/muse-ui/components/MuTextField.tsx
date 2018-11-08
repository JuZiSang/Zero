import { ofType } from "vue-tsx-support";

export interface MuTextField {
  rows?: number;
  rowsMax?: number;
  multiLine?: boolean;
  maxLength?: string | number;
}

export default ofType<MuTextField, any>().convert(
  require("muse-ui/es5/TextField").default
);

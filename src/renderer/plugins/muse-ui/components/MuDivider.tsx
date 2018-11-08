import { ofType } from "vue-tsx-support";

export interface MuDividerProps {
  inset?: boolean;
  shallowInset?: boolean;
}

export default ofType<MuDividerProps, any>().convert(
  require("muse-ui/es5/Divider").default
);

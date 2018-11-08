import { ofType } from "vue-tsx-support";

export interface MuAppBarProps {
  zDepth?: number | string;
  title?: string;
  textColor?: string;
}

export default ofType<MuAppBarProps, any>().convert(
  require("muse-ui/es5/AppBar").default
);

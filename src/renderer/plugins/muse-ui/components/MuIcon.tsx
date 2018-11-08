import { ofType } from "vue-tsx-support";

export interface MuIconProps {
  value: string;
  left?: boolean;
  right?: boolean;
  size?: number | string;
  color?: string;
}

export default ofType<MuIconProps, any>().convert(
  require("muse-ui/es5/Icon").default
);

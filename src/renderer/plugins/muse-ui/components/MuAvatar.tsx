import { ofType } from "vue-tsx-support";

export interface MuAvatarProps {
  color?: string;
  size?: string | number;
  textColor?: string;
}

export default ofType<MuAvatarProps, any>().convert(
  require("muse-ui/es5/Avatar").default
);

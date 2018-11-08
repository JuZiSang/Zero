import { ofType } from "vue-tsx-support";

export interface MuButtonProps {
  fab?: boolean;
  flat?: boolean;
  icon?: boolean;
  small?: boolean;
  large?: boolean;
  round?: boolean;
  textColor?: string;
  fullWidth?: boolean;
}

export default ofType<MuButtonProps, any>().convert(
  require("muse-ui/es5/AppBar").default
);

import { ofType } from "vue-tsx-support";

export interface MuDrawerProps {
  right?: boolean;
  open?: boolean;
  open$sync?: boolean;
  docked?: boolean;
  lockScroll?: boolean;
  width?: number | string;
  zDepth?: number;
}

export default ofType<MuDrawerProps, any>().convert(
  require("muse-ui/es5/Drawer").default
);

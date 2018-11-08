import { ofType } from "vue-tsx-support";

export interface MuPaperProps {
  circle?: boolean;
  rounded?: boolean;
  zDepth?: number;
}

export default ofType<MuPaperProps, any>().convert(
  require("muse-ui/es5/Paper").default
);

import { ofType } from "vue-tsx-support";

const Select = require("muse-ui/es5/Select");

export const MuSelect = ofType<any, any>().convert(Select.Select);
export const MuOption = ofType<any, any>().convert(Select.Option);

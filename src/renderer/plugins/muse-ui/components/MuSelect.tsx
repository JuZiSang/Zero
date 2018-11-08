import { ofType } from "vue-tsx-support";
import { OnChangeEvent } from "../types";

const Select = require("muse-ui/es5/Select");

export interface MuSelectProps {
  popoverClass?: string | Array<string> | object;
  multiple?: boolean;
  maxHeight?: string | number;
  readonly?: boolean;
  chips?: boolean;
  tags?: boolean;
  placeholder?: string;
  separator?: string;
  filterable?: boolean;
}

export interface MuOptionProps {
  label?: string;
  value?: any;
  disabled?: boolean;
  ripple?: boolean;
  searchText?: string;
  avatar?: boolean;
}

export const MuSelect = ofType<MuSelectProps, OnChangeEvent>().convert(
  Select.Select
);
export const MuOption = ofType<MuOptionProps, any>().convert(Select.Option);

import { ofType } from "vue-tsx-support";
import { OnChangeEvent, onItemClickEvent } from "../types";

const list = require("muse-ui/es5/List");

export interface MuListProps {
  nestedLevel?: number;
  textline?: string;
  nestedIndent?: boolean;
  toggleNested?: boolean;
  toggleNestedType?: string;
  dense?: boolean;
  value?: any;
}

export interface MuListEvents extends OnChangeEvent, onItemClickEvent {}

export interface MuListItemProps {
  button?: boolean;
  nestedListClass?: string | object | Array<string>;
  open?: boolean;
  avatar?: boolean;
  nested?: boolean; // 是否允许嵌套
  tabIndex?: string | number;
  value?: any;
}

export interface MuListItemEvents {
  onToggleNested: any;
}

export const MuList = ofType<MuListProps, MuListEvents>().convert(list.List);
export const MuListItem = ofType<MuListItemProps, MuListItemEvents>().convert(
  list.ListItem
);
export const MuListItemAction = ofType<any, any>().convert(list.ListAction);
export const MuListItemContent = ofType<any, any>().convert(
  list.ListItemContent
);
export const MuListItemTitle = ofType<any, any>().convert(list.ListItemTitle);
export const MuListItemSubTitle = ofType<any, any>().convert(
  list.ListItemSubTitle
);
export const MuListItemAfterText = ofType<any, any>().convert(
  list.ListItemAfterText
);

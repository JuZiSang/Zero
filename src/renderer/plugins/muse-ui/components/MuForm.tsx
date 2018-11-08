import { ofType } from "vue-tsx-support";

export interface MuFormProps {
  model?: object;
  inline?: boolean;
  labelWidth?: string | number;
  labelPosition?: string;
  autoValidate?: boolean;
}

export interface MuFormItemProps {
  label?: string;
  labelFloat?: Boolean;
  icon?: string;
  prop?: string;
  labelWidth?: string | number;
  rules?: Array<string>;
  helpText?: string;
  errorText?: string;
  labelPosition?: string;
}

export const MuForm = ofType<MuFormProps, any>().convert(
  require("muse-ui/es5/Form").Form
);
export const MuFormItem = ofType<MuFormItemProps, any>().convert(
  require("muse-ui/es5/Form").FormItem
);

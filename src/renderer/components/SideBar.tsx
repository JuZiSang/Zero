import * as Tsx from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import * as style from "@/styles/components/SideBar.module.scss";

@Component
export default class SideBar extends Tsx.Component<any> {
  render() {
    return <div class={style.sidebar} />;
  }
}

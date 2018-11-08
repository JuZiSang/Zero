import * as Tsx from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import * as style from "@/styles/components/Editor.module.scss";

@Component
export default class Editor extends Tsx.Component<any> {
  render() {
    return <div class={style.editor} />;
  }
}

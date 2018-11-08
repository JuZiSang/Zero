import * as Tsx from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import * as style from "@/styles/components/NoteList.module.scss";

@Component
export default class NoteList extends Tsx.Component<any> {
  render() {
    return <div class={style.noteList} />;
  }
}

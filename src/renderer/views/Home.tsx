import { Vue, Component } from "vue-property-decorator";
import Editor from "@/components/Editor";
import SideBar from "@/components/SideBar/SideBar";
import NoteList from "@/components/NoteList";
import * as style from "@/styles/views/Home.module.scss";
import { ContentWidth, SideBarWidth, NoteListWidth } from "@/utils/config";

@Component
export default class Home extends Vue {
  render() {
    return (
      <div class={style.home}>
        <SideBar style={{ width: SideBarWidth }} />
        <NoteList style={{ width: NoteListWidth, marginLeft: SideBarWidth }} />
        <Editor style={{ width: ContentWidth }} />
      </div>
    );
  }
}

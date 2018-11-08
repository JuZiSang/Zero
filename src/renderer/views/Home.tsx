import { Vue, Component } from "vue-property-decorator";
import Editor from "@/components/Editor";
import SideBar from "@/components/SideBar";
import * as style from "@/styles/views/Home.module.scss";

@Component
export default class Home extends Vue {
  render() {
    return (
      <div class={style.home}>
        <SideBar />
        <Editor />
      </div>
    );
  }
}

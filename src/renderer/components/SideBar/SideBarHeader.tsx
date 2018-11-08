import { Component, Prop, Vue } from "vue-property-decorator";
import * as style from "@/styles/components/SideBar.module.scss";
import { MuAvatar, MuButton, MuIcon, MuPaper } from "@/plugins/muse-ui";

@Component
export default class SideBarHeader extends Vue {
  render() {
    return (
      <MuPaper class={style.SideBarHeader} zDepth={2}>
        <MuAvatar class={style.avatar} size="48px">
          <img
            draggable={false}
            src="https://avatars2.githubusercontent.com/u/14973323?s=460&v=4"
          />
        </MuAvatar>
        <div class={style.address}>
          <b class={style.name}>橘子</b>
          <p class={style.email}>juziexe@gmail.com</p>
        </div>
        <div class={style.action}>
          <MuButton small icon>
            <MuIcon size={24} value="sync" />
          </MuButton>
        </div>
      </MuPaper>
    );
  }
}

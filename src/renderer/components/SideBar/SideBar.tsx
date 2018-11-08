import * as Tsx from "vue-tsx-support";
import { Component, Prop, Vue } from "vue-property-decorator";
import { MuDrawer } from "@/plugins/muse-ui";
import { SideBarWidth } from "@/utils/config";
import SideBarHeader from "./SideBarHeader";
import SideBarList from "./SideBarList";
import * as style from "@/styles/components/SideBar.module.scss";

@Component
export default class SideBar extends Tsx.Component<any> {
  @Prop({ type: Boolean, default: true })
  private readonly open!: boolean;

  get drawerOpen() {
    return this.open;
  }

  set drawerOpen(open: boolean) {
    this.$emit("update:open", open);
  }

  render() {
    return (
      <MuDrawer
        class={style.sidebar}
        open$sync={this.drawerOpen}
        width={SideBarWidth}
        zDepth={1}
        docked
      >
        <SideBarHeader />
        <SideBarList />
      </MuDrawer>
    );
  }
}

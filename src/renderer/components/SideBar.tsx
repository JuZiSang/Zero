import * as Tsx from "vue-tsx-support";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as style from "@/styles/components/SideBar.module.scss";
import { MuDrawer, MuAvatar, MuButton, MuIcon } from "@/plugins/muse-ui";
import { SideBarWidth } from "@/utils/config";

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

@Component
class SideBarHeader extends Vue {
  render() {
    return (
      <header class={style.SideBarHeader}>
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
      </header>
    );
  }
}

@Component
class SideBarList extends Vue {
  render() {
    return <div />;
  }
}

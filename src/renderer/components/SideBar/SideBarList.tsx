import { Component, Prop, Vue } from "vue-property-decorator";
import {
  MuIcon,
  MuList,
  MuListItem,
  MuListItemAction,
  MuListItemTitle
} from "@/plugins/muse-ui";
import * as style from "@/styles/components/SideBar.module.scss";

@Component
export default class SideBarList extends Vue {
  // itemList = [{}];

  open = "folder";

  render() {
    return (
      <MuList class={style.sideBarList} toggleNested>
        {["文件夹", "标签"].map(item => {
          return (
            <MuListItem open={this.open === item} button ripple={false} nested>
              <MuListItemAction>
                <MuIcon value="folder" />
              </MuListItemAction>
              <MuListItemTitle>文件夹</MuListItemTitle>
              <MuListItemAction>
                <MuIcon
                  class="toggle-icon"
                  size="24"
                  value="keyboard_arrow_down"
                />
              </MuListItemAction>
              {Array.from({ length: 10 }).map((item, index) => (
                <MuListItem button ripple={false} slot="nested">
                  <MuListItemTitle>List Item {index}</MuListItemTitle>
                </MuListItem>
              ))}
            </MuListItem>
          );
        })}
      </MuList>
    );
  }
}

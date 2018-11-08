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
  render() {
    return (
      <MuList toggleNested>
        <MuListItem button ripple={false} nested>
          <MuListItemTitle>文件夹</MuListItemTitle>
          <MuListItemAction>
            <MuIcon class="toggle-icon" size="24" value="keyboard_arrow_down" />
          </MuListItemAction>
        </MuListItem>
      </MuList>
    );
  }
}

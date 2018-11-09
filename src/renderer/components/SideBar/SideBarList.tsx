import { Component, Prop, Vue } from "vue-property-decorator";
import {
  MuIcon,
  MuList,
  MuListItem,
  MuListItemAction,
  MuListItemTitle
} from "@/plugins/muse-ui";

@Component
export default class SideBarList extends Vue {
  render() {
    return (
      <MuList toggleNested>
        {Array.from({ length: 5 }).map(() => {
          return (
            <MuListItem button ripple={false} nested>
              <MuListItemAction>
                <MuIcon value="inbox" />
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

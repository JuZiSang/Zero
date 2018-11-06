import { Vue, Component } from "vue-property-decorator";
import * as style from "@/styles/views/login.module.scss";

@Component
export default class Login extends Vue {
  render() {
    return <div class={style.login} />;
  }
}

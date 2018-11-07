import { Vue, Component } from "vue-property-decorator";
import * as style from "@/styles/views/login.module.scss";
import { VCard } from "vuetify-tsx";

@Component
export default class Login extends Vue {
  render() {
    return (
      <div class={style.login}>
        <VCard color="primary" extended flat />
      </div>
    );
  }
}

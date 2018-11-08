import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  render() {
    return <router-view />;
  }
}

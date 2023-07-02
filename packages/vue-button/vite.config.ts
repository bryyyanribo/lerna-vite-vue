import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/main.ts"),
    name: "VueButton",
    fileName: "vue-button",
  },
});

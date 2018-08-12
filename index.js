/** @format */

import { AppRegistry } from "react-native";
import App from "./src/App";
import "./src/utils";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

import { NativeModules, Platform, Dimensions } from "react-native";
const { StatusBarManager } = NativeModules;

const { height, width } = Dimensions.get("window");

const isIPhoneX = NativeModules.DeviceInfo.isIPhoneX_deprecated;
const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? (isIPhoneX ? 35 : 20) : StatusBarManager.HEIGHT;

global.isIPhoneX = isIPhoneX;
global.STATUSBAR_HEIGHT = STATUSBAR_HEIGHT;
(global.HEIGHT = height), (global.WIDTH = width);
global.isIOS = Platform.OS === "ios";

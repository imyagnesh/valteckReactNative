import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./containers/HomeScreen";
import LoginScreen from "./containers/LoginScreen";
import AboutScreen from "./containers/AboutScreen";

const TabContainer = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: AboutScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createStackNavigator(
  {
    Login: LoginScreen,
    Tab: {
      screen: TabContainer
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "screen",
    gesturesEnabled: "false",
    mode: "card",
    cardStyle: {}
  }
);

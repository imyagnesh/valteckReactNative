import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import GetEngaged from "./containers/GetEngaged";

export default class App extends Component {
  static propTypes = {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: STATUSBAR_HEIGHT,
          backgroundColor: "#fa8581"
        }}
      >
        <GetEngaged />
      </View>
    );
  }
}

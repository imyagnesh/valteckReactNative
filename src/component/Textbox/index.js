import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TextInput, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

class Textbox extends Component {
  render() {
    const { text, name, focus } = this.props;
    return (
      <TextInput
        ref={ref => (this[name] = ref)}
        placeholder={text}
        style={{
          height: 40,
          width: width - 40,
          backgroundColor: "#fff",
          borderColor: "#8a8a8a",
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 4
        }}
        onSubmitEditing={() => console.log(this[focus])}
        {...this.props}
      />
    );
  }
}

Textbox.propTypes = {
  text: PropTypes.string.isRequired
};

export default Textbox;

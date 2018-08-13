import React from "react";
import PropTypes from "prop-types";
import { View, Platform, StyleSheet } from "react-native";

const EmbossView = ({ children }) => {
  return (
    <View
      style={{
        marginHorizontal: 24,
        marginVertical: 27,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        ...Platform.select({
          ios: {
            shadowColor: "rgba(0, 0, 0, 0.19)",
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1
          },
          android: {
            elevation: 1
          }
        })
      }}
    >
      {children}
    </View>
  );
};

EmbossView.propTypes = {};

export default EmbossView;

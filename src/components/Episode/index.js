import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Episode = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        alignItems: "center"
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#2d2d2d",
            lineHeight: 19,
            marginBottom: 5
          }}
        >
          Post Episodic Learning
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#9b9b9b",
            lineHeight: 20
          }}
        >
          Complete post learning to proceed.
        </Text>
      </View>
      <Icon
        name={`${isIOS ? "ios" : "md"}-arrow-forward`}
        size={24}
        color="rgba(109, 85, 192, 0.9)"
      />
    </View>
  );
};

Episode.propTypes = {};

export default Episode;

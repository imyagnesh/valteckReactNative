import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  caption: {
    fontSize: 11,
    color: "#fff"
  }
});

const Header = () => {
  return (
    <View
      style={{
        height: 320,
        width: WIDTH,
        backgroundColor: "#fa8581",
        paddingHorizontal: 26
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 42,
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          Get Engaged
        </Text>
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.79)",
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 20
          }}
        >
          Episode One: Last Day at OT
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <View style={{ marginRight: 20 }}>
          <Text style={style.title}>10:12</Text>
          <Text style={style.caption}>Time Taken</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Text style={style.title}>83%</Text>
          <Text style={style.caption}>Tools</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Text style={style.title}>20 </Text>
          <Text style={style.caption}>Total Points</Text>
        </View>
      </View>
    </View>
  );
};

Header.propTypes = {};

export default Header;

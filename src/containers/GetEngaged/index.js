import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../components/Header";
import EmbossView from "../../components/EmbossView";
import Episode from "../../components/Episode";
import List from "../../components/List";

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "red"
  }
});

const data = [
  {
    id: 1,
    text: "Mental Models",
    value: "9.2",
    color: "#f5677d"
  },
  {
    id: 2,
    text: "Ladder of Inference",
    value: "4.4",
    color: "#b652e4"
  },
  {
    id: 3,
    text: "Inquiry & Advocacy",
    value: "8.9",
    color: "#2ea0ff"
  },
  {
    id: 4,
    text: "Left Hand Column",
    value: "8.9",
    color: "#91e1cf"
  }
];

const data1 = [
  {
    id: 1,
    text: "Utilise Inquiry & Advocacy when clarity is needed"
  },
  {
    id: 2,
    text: "Ladder of Inference can help to achieve better outcomes"
  },
  {
    id: 3,
    text: "We all have Mental Models. Be aware of them."
  }
];

class GetEngaged extends Component {
  state = {
    showAnalysis: false,
    language: "java"
  };
  componentDidMount = () => {
    if (this.scrollView) {
      let i = 0;
      setInterval(() => {
        this.scrollView.scrollTo({ x: i * 230, y: 0, animated: true });
        i += 1;
      }, 2000);
    }
  };

  render() {
    const { showAnalysis } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <View
          style={{
            backgroundColor: "#f9f7ff"
          }}
        >
          <EmbossView>
            <Episode />
          </EmbossView>
          <View style={{ backgroundColor: "#fff", paddingHorizontal: 24 }}>
            <TouchableOpacity
              onPress={() => this.setState({ showAnalysis: !showAnalysis })}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 30,
                  alignItems: "center"
                }}
              >
                <Text style={[styles.text, { color: "#2d2d2d" }]}>
                  Statistical Analysis
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontSize: 14,
                    lineHeight: 20,
                    color: "#4a4a4a"
                  }}
                >
                  Jan 4th 2018
                </Text>
                <Icon
                  name={showAnalysis ? "md-arrow-dropdown" : "md-arrow-dropup"}
                  size={30}
                />
              </View>
            </TouchableOpacity>
            {showAnalysis && (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text>63%</Text>
                    <Text>Proactive</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>14%</Text>
                    <Text>Reflective</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>14%</Text>
                    <Text>Analytical</Text>
                  </View>
                </View>
                <List data={data} />
                <List data={data1} />
              </View>
            )}

            <ScrollView
              ref={scrollView => {
                this.scrollView = scrollView;
              }}
              horizontal
              decelerationRate={0}
              snapToInterval={230}
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
            >
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "red",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "yellow",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "blue",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "black",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "orange",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "red",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "red",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "red",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "red",
                  margin: 10
                }}
              />
              <View
                style={{
                  height: 110,
                  width: 210,
                  backgroundColor: "red",
                  margin: 10
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

GetEngaged.propTypes = {};

export default GetEngaged;

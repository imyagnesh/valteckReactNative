import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TextInput,
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Textbox from "../component/Textbox";
import logo from "../images/reactLogo.png";

const { width, height } = Dimensions.get("window");

const IMAGE_HEIGHT_SMALL = 50;

const IMAGE_HEIGHT_FULL = 180;

const LogoTitle = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {};
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT_FULL);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount = () => {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  };

  keyboardWillShow(e) {
    Animated.timing(this.imageHeight, {
      duration: e.duration,
      Value: 50
    }).start();
  }

  keyboardWillHide(e) {
    Animated.timing(this.imageHeight, {
      duration: e.duration,
      Value: 180
    }).start();
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          paddingVertical: STATUSBAR_HEIGHT
        }}
        behavior="padding"
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Animated.Image
              source={logo}
              style={[
                {
                  flex: 1,
                  width: 200,
                  resizeMode: "contain"
                },
                { height: this.imageHeight }
              ]}
            />
            <View>
              <TextInput
                ref={ref => (this.email = ref)}
                placeholder="Email"
                style={{
                  height: 40,
                  width: width - 40,
                  backgroundColor: "#fff",
                  borderColor: "#8a8a8a",
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderRadius: 4,
                  marginBottom: 10
                }}
                onSubmitEditing={() => this.username.focus()}
                returnKeyType="next"
              />
              <TextInput
                ref={ref => (this.username = ref)}
                placeholder="User Name"
                style={{
                  height: 40,
                  width: width - 40,
                  backgroundColor: "#fff",
                  borderColor: "#8a8a8a",
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderRadius: 4,
                  marginBottom: 10
                }}
                onSubmitEditing={() => this.password.focus()}
                returnKeyType="next"
              />
              <TextInput
                ref={ref => (this.password = ref)}
                placeholder="Password"
                style={{
                  height: 40,
                  width: width - 40,
                  backgroundColor: "#fff",
                  borderColor: "#8a8a8a",
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderRadius: 4,
                  marginBottom: 10
                }}
                onSubmitEditing={() => this.confirmPassword.focus()}
                returnKeyType="next"
              />
              <TextInput
                ref={ref => (this.confirmPassword = ref)}
                placeholder="Confirm Password"
                style={{
                  height: 40,
                  width: width - 40,
                  backgroundColor: "#fff",
                  borderColor: "#8a8a8a",
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderRadius: 4,
                  marginBottom: 10
                }}
                onSubmitEditing={() => alert("form submit")}
                returnKeyType="go"
              />
              <TouchableHighlight underlayColor="#8a8a8a">
                <View
                  style={{
                    height: 40,
                    width: "100%",
                    backgroundColor: "#56D5FA",
                    borderRadius: 4,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: "bold"
                    }}
                  >
                    Submit
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

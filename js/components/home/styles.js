const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 65 : 75,
    top: Platform.OS === "android" ? 65 : 95,
    width: 300,
    height: 120
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 6
  }
};

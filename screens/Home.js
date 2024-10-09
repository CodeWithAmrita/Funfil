import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.upperContainer}>
          <Image
            source={require("../assets/appIcon.png")}
            style={styles.appIcon}
          />
          <Text style={styles.appName}>FunFil</Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.contentText}>
                FunFil is a great photo filter app for amusing camera effects with cutesy and funny real-time photo filters directly on your face.
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/hat-pic1.png")}
                style={styles.image}
              />
              <Image
                source={require("../assets/crown-pic1.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/flower-pic2.png")}
                style={styles.image}
              />
              <Image
                source={require("../assets/other-pic1.png")}
                style={styles.image}
              />
            </View>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={styles.buttonText}>Try Now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7F2F8"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  upperContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7F2F8",
    flexDirection: "row"
  },
  appIcon: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
    borderWidth: 2,
    borderColor: "#FFA384",
    marginRight: RFValue(10)
  },
  appName: {
    color: "#FFA384",
    fontSize: RFValue(25),
    fontWeight: "800",
    fontStyle: "italic"
  },
  middleContainer: {
    flex: 0.55
  },
  textContainer: { flex: 0.5 },
  contentContainer: {
    flex: 1,
    marginHorizontal: RFValue(15),
    backgroundColor: "#FFA384",
    borderRadius: RFValue(20),
    borderWidth: 5,
    borderColor: "#FBE5C0"
  },
  contentText: {
    fontSize: RFValue(17),
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FFFF",
    padding: RFValue(10)
  },
  imageContainer: {
    flex: 0.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  image: {
    height: RFValue(80),
    width: RFValue(80),
    resizeMode: "contain"
  },
  lowerContainer: {
    flex: 0.3,
    alignItems: "center"
  },
  button: {
    width: "90%",
    height: RFValue(80),
    borderRadius: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA384",
    borderColor: "#FBE5C0",
    borderWidth: 5,
    marginTop: RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(25),
    fontStyle: "italic",
    color: "#FBE5C0",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  }
});

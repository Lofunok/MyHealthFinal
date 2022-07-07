import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../../src/config/db";

export default class UserLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  userLogin = () => {
    if (this.state.email === "" || this.state.password === "") {
      Alert.alert("Enter details to login!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signIn(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log("User logged-in successfully!");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Home");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    return (
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../../../assets/Logo.jpg")}
            />
            <StatusBar style="auto" />
            <View style={styles.welcomeTextBox}>
              <Text style={styles.welcomeText}>Welcome To MyHealth</Text>
            </View>
            {/* Container for inputs */}
            <View style={styles.inputsContainter}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, "email")}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, "password")}
                maxLength={15}
                secureTextEntry={true}
              />
              {/* forgot password */}
            </View>
            {/* login button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this.userLogin()}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            {/* sign up link */}
            <View style={styles.screenTextContainer}>
              <Text style={styles.regularText}>Don't have an acount?</Text>
              <TouchableOpacity
                onPress={() => this.prop.navigation.navigate("SignUp")}
              >
                <Text style={styles.pressableText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
            {/* Admin link */}
            <View style={[styles.screenTextContainer, styles.adminPosition]}>
              <TouchableOpacity
                onPress={() => this.prop.navigation.navigate("Admin")}
              >
                <Text style={styles.pressableText}>Admin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

//Component Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  logo: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 165,
    height: 175,
    marginTop: 100,
    borderRadius: 30,
  },
  welcomeTextBox: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 208,
    height: 78,
    marginTop: 20,
  },
  welcomeText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 30,
    textAlign: "center",
    color: "#000000",
  },
  inputsContainter: {
    width: "90%",
    marginTop: 1,
  },
  input: {
    backgroundColor: "rgba(255, 88, 88, 0.15)",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  screenTextContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  regularText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
  },
  pressableText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
    color: "#004AD9",
  },
  buttonContainer: {
    position: "relative",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#FF5858",
    width: "100%",
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    color: "#FFFFFF",
    textAlign: "center",
  },
  fP: {
    marginTop: 3,
    marginLeft: 200,
  },
  adminPosition: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
});

import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
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
  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      if (this.state.password != this.state.cpassword) {
        Alert.alert("Password and confirm password not match!");
      } else {
        this.setState({
          isLoading: true,
        });
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
            displaySurname: this.state.displaySurname,
          });
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: "",
            displaySurname: "",
            email: "",
            phoneNumber: "",
            paymentMethod: "",
            password: "",
            cpassword: "",
          });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      //Safe area view to avoid elements overlapping onto system elements( e.g status bar)
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <StatusBar style="auto" />
            {/* Logo */}
            <Image
              style={styles.logo}
              source={require("../../assets/Logo.jpg")}
            />
            {/* Headding */}
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Create new account</Text>
            </View>
            {/* Input Fields */}
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, "displayName")}
                placeholder="Name"
              />
              <TextInput
                style={styles.input}
                value={this.state.displaySurname}
                onChangeText={(val) =>
                  this.updateInputVal(val, "displaySurname")
                }
                placeholder="Surname"
              />
              <TextInput
                style={styles.input}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, "email")}
                placeholder="Email Address"
              />
              <TextInput
                style={styles.input}
                value={this.state.phoneNumber}
                onChangeText={(val) => this.updateInputVal(val, "phoneNumber")}
                placeholder="Phone Number"
              />
              <TextInput
                style={styles.input}
                value={this.state.paymentMethod}
                onChangeText={(val) => updateInputVal(val, "paymentMethod")}
                placeholder="Cash/Medical Aid"
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, "password")}
                maxLength={15}
                secureTextEntry={true}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Confirm Password"
                value={this.state.spassword}
                onChangeText={(val) => this.updateInputVal(val, "cpassword")}
                maxLength={15}
                secureTextEntry={true}
              />
            </View>
            {/* Terms of Use and privacy policy agreement */}
            <View style={styles.screenTextContainer}>
              <Text style={styles.regularText}>
                By submtting this form, you are agreeing to our{" "}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("https://myhealth.co,terms-of-use")
                }
              >
                <Text style={styles.pressabletext}>Terms of Use</Text>
              </TouchableOpacity>
              <Text style={styles.regularText}> and our </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("https://myhealth.co,privacy-policy")
                }
              >
                <Text style={styles.pressabletext}>Privacy Policy</Text>
              </TouchableOpacity>
              <Text style={styles.regularText}>.</Text>
            </View>
            {/* Create account button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("SuccessModal")}
              >
                <Text style={styles.buttonText}>Create account</Text>
              </TouchableOpacity>
            </View>
            {/* back to sign in link */}
            <View style={styles.screenTextContainer}>
              <Text style={styles.regularText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.pressabletext}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    marginTop: 45,
    borderRadius: 30,
  },
  headingContainer: {
    position: "relative",
    width: 331,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  heading: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 39,
    color: "#000000",
  },
  inputsContainer: { width: "90%", marginTop: 5 },
  input: {
    backgroundColor: "rgba(255, 88, 88, 0.15)",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  screenTextContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  regularText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
  },
  pressabletext: {
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
});

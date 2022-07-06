import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
/*import firebase from "../src/screens/config/db";*/

export default function UserLoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <Text style={styles.welcomeText}>Welcome To MyHealth.</Text>
          </View>
          {/* Container for inputs */}
          <View style={styles.inputsContainter}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email Address"
            />
            <TextInput
              secureTextEntry //hides the password as it's being entered
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />
            {/* forgot password */}
          </View>
          <View style={[styles.screenTextContainer, styles.fP]}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.pressableText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          {/* login button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          {/* sign up link */}
          <View style={styles.screenTextContainer}>
            <Text style={styles.regularText}>Don't have an acount?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.pressableText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          {/* Admin link */}
          <View style={[styles.screenTextContainer, styles.adminPosition]}>
            <TouchableOpacity onPress={() => navigation.navigate("AdminLogin")}>
              <Text style={styles.pressableText}>Admin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
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
    marginTop: 60,
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
    fontSize: 36,
    lineHeight: 39,
    textAlign: "center",
    color: "#000000",
  },
  inputsContainter: {
    width: "90%",
    marginTop: 15,
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
    height: 18,
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
    marginTop: 100,
  },
});

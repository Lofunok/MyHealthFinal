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

const SignUpScreen = () => {
  const navigation = useNavigation();
  //States to handle user inputs fro signing in
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    //Safe area view to avoid elements overlapping onto system elements( e.g status bar)
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* Logo */}
          <Image
            style={styles.logo}
            source={require("../../../assets/Logo.jpg")}
          />
          {/* Headding */}
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Create new account</Text>
          </View>
          {/* Input Fields */}
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              value={surname}
              onChangeText={(text) => setSurname(text)}
              placeholder="Surname"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email Address"
            />
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              placeholder="Phone Number"
            />
            <TextInput
              style={styles.input}
              value={paymentMethod}
              onChangeText={(text) => setPaymentMethod(text)}
              placeholder="Cash/Medical Aid"
            />
            <TextInput
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Create Password"
            />
            <TextInput
              secureTextEntry
              style={styles.input}
              value={confirmPass}
              onChangeText={(text) => setConfirmPass(text)}
              placeholder="Confirm Password"
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
};

export default SignUpScreen;

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

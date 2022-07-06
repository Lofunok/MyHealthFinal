import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserHome = () => {
  const navigation = useNavigation();
  const [usersName, setUsersName] = useState("User 1");
  return (
    <SafeAreaView>
      {/* Header, note that on the home screen, a scroll view is not used
         but on other screens its use will be implemented because of the possible need that might arise from the 
         user's side */}

      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./assets/Logo.jpg")} />
        <View style={styles.headerTextBox}>
          <Text style={styles.headerText}>Welcome {usersName}</Text>
        </View>
        <View style={styles.headerTextBox}>
          <Text style={styles.headerText}>What would you like To do?</Text>
        </View>
      </View>
      {/* Screen Content */}
      <View style={styles.contentContainer}>
        {/* selection buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BookingDoctorChoice")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Book appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserAppointmentsList")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Manage appointments</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.homeButton}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="home" size={45} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.menuButton}>
          <TouchableOpacity onPress={() => navigation.navigate("MenuTab")}>
            <MaterialCommunityIcons name="menu" size={45} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: "67.15%",
  },
  header: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5858",
    height: 195,
  },
  logo: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginTop: 0,
    borderRadius: 30,
  },
  headerTextBox: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 26,
    lineHeight: 32,
    textAlign: "center",
    color: "#FFFFFF",
  },
  buttonContainer: {
    position: "relative",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FF5858",
    width: "100%",
    borderRadius: 15,
    padding: 25,
    marginTop: 60,
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
  footer: {
    position: "relative",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 54,
  },

  homeButton: {
    position: "relative",
    marginLeft: 10,
  },
  menuButton: {
    position: "relative",
    marginLeft: 255,
  },
});

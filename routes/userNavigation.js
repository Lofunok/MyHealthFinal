import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserLoginScreen from "../src/screens/userScreens/userLogin";
import UserHome from "../src/screens/userScreens/userHome";
import SignUpScreen from "../src/screens/userScreens/signUp";

const UserStack = createNativeStackNavigator();
export default function UserNavigation() {
  return (
    <NavigationContainer>
      <UserStack.Navigator initialRouteName="Login">
        <UserStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={UserLoginScreen}
        />
        <UserStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={UserHome}
        />
        <UserStack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
      </UserStack.Navigator>
    </NavigationContainer>
  );
}

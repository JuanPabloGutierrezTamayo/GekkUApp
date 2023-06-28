import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import MenuScreen from "./src/screens/MenuScreen";
import AcademicScreen from "./src/screens/AcademicScreen";

import { UserProvider } from "./src/context/UserContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: true
          }}
        >
          <Stack.Screen
            name="Login"
            component={ LoginScreen }
          />
          <Stack.Screen
            name="Menu"
            component={ MenuScreen }
          />
          <Stack.Screen
            name="Academic"
            component={ AcademicScreen }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

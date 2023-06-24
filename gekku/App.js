import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import MenuScreen from "./src/screens/MenuScreen";
import AcademicScreen from "./src/screens/AcademicScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Academic"
        screenOptions={{
          headerShown: false
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
  );
}

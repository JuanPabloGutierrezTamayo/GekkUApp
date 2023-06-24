import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import StartScreen from "./src/screens/StartScreen";
import MenuScreen from "./src/screens/MenuScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: true
        }}
      >
        <Stack.Screen 
          name="Login"
          component={ LoginScreen }
        />
        <Stack.Screen 
          name="Start"
          component={ StartScreen }
        />
        <Stack.Screen 
          name="Menu"
          component={ MenuScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

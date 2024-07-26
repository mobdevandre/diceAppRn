import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Die from "./app/Die";
import Login from "./app/Login";
import Home from "./app/Home";
import RockPaperS from "./app/RockPaperS";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Die" component={Die} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RockPaperS" component={RockPaperS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

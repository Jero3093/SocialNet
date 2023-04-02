import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons"; //Expo Icons
import Home from "../../Screens/Home"; //Home Screen
import Add from "../../Screens/Add"; //Add Screen
import Details from "../../Screens/Details"; //Details Screen
import Comments from "../../Screens/Comments"; //Comments Screen

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  function TabNav() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#00d7ff",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Octicons name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Octicons name="diff-added" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={TabNav} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

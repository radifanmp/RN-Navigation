import * as React from "react";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Navigation tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Icon
import { Ionicons } from "@expo/vector-icons";

// import Theme NativeBase
import { useTheme } from "native-base";

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import incDec from "./src/screens/incDec";
import ListData from "./src/screens/listData";
import DetailData from "./src/screens/detailData";

// Init Stack Navigation
const Stack = createStackNavigator();

// Init Tabs Navigation
const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Form") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "List") {
            iconName = focused
              ? "md-list-circle-sharp"
              : "md-list-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Hello} />
      <Tab.Screen name="Form" component={FormNativeBase} />
      <Tab.Screen name="List" component={ListData} />
    </Tab.Navigator>
  );
}

export default function Container() {
  // Theme use
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Navigation Screen */}
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="IncDec"
          component={incDec}
          options={{
            title: "Increment Decrement",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.primary["300"] },
          }}
        />
        <Stack.Screen
          name="Detail Data"
          component={DetailData}
          options={{
            title: "Detail List Social Media",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.primary["300"] },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

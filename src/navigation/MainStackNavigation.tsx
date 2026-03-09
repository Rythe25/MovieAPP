import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./Home/HomeStackNavigation";
import HomeStackParamList from "./Home/HomeStackParamList";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import SearchScreen from "../screen/Home/SearchScreen";
import HomeScreen from "../screen/Home/HomeScreen";
import ProfileScreen from "../screen/Profile/ProfileScreen";

const BottomNavigation = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: "#0296e5",
    tabBarStyle: {
      height: 100,
      paddingTop: 20,
      backgroundColor: "#171725", // change background color
      borderTopWidth: 2,
      borderTopColor: "#0296e5", // optional: remove top border
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({ color, size }) => {
          return <Entypo name="home" size={size} color={color} />;
        },
      },
    },
    // Search: {
    //   screen: SearchScreen,
    //   options: {
    //     tabBarIcon: ({ color, size }) => {
    //       return <FontAwesome name="search" size={size} color={color} />;
    //     },
    //   },
    // },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="user" size={size} color={color} />;
        },
      },
    },
  },
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}

export default BottomNavigation;

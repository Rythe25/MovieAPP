import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackParamList from "./HomeStackParamList";
import HomeScreen from "../../screen/Home/HomeScreen";
import DetailScreen from "../../screen/Home/DetailScreen";
import SearchScreen from "../../screen/Home/SearchScreen";
import ProfileScreen from "../../screen/Profile/ProfileScreen";

const HomeStackNavigation = createNativeStackNavigator<HomeStackParamList>({
  screens: {
    Home: HomeScreen,
    Search: SearchScreen,
    Profile: ProfileScreen,
  },
});

export default HomeStackNavigation;

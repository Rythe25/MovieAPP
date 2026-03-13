import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackParamList from "./RootStackParamList";
import { createStaticNavigation } from "@react-navigation/native";
import LoginScreen from "../../screen/Auth/LoginScreen";
import SignUpScreen from "../../screen/Auth/SignUpScreen";
import RootScreen from "../../screen/Auth/RootScreen";
import CreateNewPasswordScreen from "../../screen/Auth/CreateNewPasswordScreen";
import PasswordResetScreen from "../../screen/Auth/PasswordResetScreen";
import VerificationScreen from "../../screen/Auth/VerificationScreen";
import BottomNavigation from "../MainStackNavigation";
import EditProfileScreen from "../../screen/Profile/EditProfileScreen";
import ProfileScreen from "../../screen/Profile/ProfileScreen";
import DetailScreen from "../../screen/Home/DetailScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: {
    headerShown: false,
    animation: "none",
    contentStyle: {
      backgroundColor: "#171725",
    },
  },
  screens: {
    Root: RootScreen,
    SignUp: SignUpScreen,
    Login: LoginScreen,
    PasswordReset : PasswordResetScreen,
    Verification : VerificationScreen,
    HomeStack: BottomNavigation,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen,
    Detail: DetailScreen,
  },
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStackNavigation = createStaticNavigation(RootStack);
export default RootStackNavigation;

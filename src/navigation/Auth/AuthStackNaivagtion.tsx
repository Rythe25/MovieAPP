import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackParamList from "./AuthStackParamList";
import { createStaticNavigation } from "@react-navigation/native";
import LoginScreen from "../../screen/Auth/LoginScreen";
import SignUpScreen from "../../screen/Auth/SignUpScreen";
import RootScreen from "../../screen/Auth/RootScreen";
import CreateNewPasswordScreen from "../../screen/Auth/CreateNewPasswordScreen";
import PasswordResetScreen from "../../screen/Auth/PasswordResetScreen";
import VerificationScreen from "../../screen/Auth/VerificationScreen";
import PasswordVerificationScreen from "../../screen/Auth/PasswordVerificationScreen";

const RootStack = createNativeStackNavigator<AuthStackParamList>({
  screenOptions: { 
    headerShown: false, 
    animation: 'none',
    contentStyle: {
      backgroundColor : '#171725'
    }
    
  },
  screens: {
    Root: RootScreen,
    SignUp: SignUpScreen, 
    Login: LoginScreen,
    CreateNewPassword : CreateNewPasswordScreen,
    PasswordReset : PasswordResetScreen,
    Verification : VerificationScreen,
    PasswordVerification : PasswordVerificationScreen
  },
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

const AuthStackNavigation = createStaticNavigation(RootStack);
export default AuthStackNavigation;

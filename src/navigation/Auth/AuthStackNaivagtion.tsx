import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackParamList from "./AuthStackParamList";
import { createStaticNavigation } from "@react-navigation/native";
import LoginScreen from "../../screen/Auth/LoginScreen";
import SignUpScreen from "../../screen/Auth/SignUpScreen";
import RootScreen from "../../screen/Auth/RootScreen";
import CreateNewPasswordScreen from "../../screen/Auth/CreateNewPasswordScreen";
import PasswordResetScreen from "../../screen/Auth/PasswordResetScreen";
import VerificationScreen from "../../screen/Auth/Verification";

// const RootStack = createNativeStackNavigator<AuthStackParamList>({
//   screenOptions: { 
//     headerShown: true, 
//     contentStyle: {
//       backgroundColor : '#171725'
//     }
//   },
//   screens: {
//     Root: RootScreen,
//     SignUp: SignUpScreen, 
//     Login: LoginScreen,
//     CreateNewPassword : CreateNewPasswordScreen,
//     PasswordReset : PasswordResetScreen,
//     Verification : VerificationScreen
//   },
// });

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#171725" },
      }}
    >
      <Stack.Screen name="Root" component={RootScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;

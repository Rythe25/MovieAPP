import { useEffect } from "react";
import * as SystemUI from "expo-system-ui";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigation from "./src/navigation/Auth/AuthStackNaivagtion";
import ProfileScreen from "./src/screen/Profile/ProfileScreen";
import EditProfileScreen from "./src/screen/Profile/EditProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const PROFILE_ONLY = true;

  // Run once at load time useEffect + []
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#171725");
  }, []);

  if (PROFILE_ONLY) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <AuthStackNavigation />;
}

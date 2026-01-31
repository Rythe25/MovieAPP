import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthStackNavigation from "./src/navigation/Auth/AuthStackNaivagtion";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#171725",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthStackNavigation />
    </NavigationContainer>
  );
}


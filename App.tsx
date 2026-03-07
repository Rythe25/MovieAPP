import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SystemUI from "expo-system-ui";
import AuthStackNavigation from "./src/navigation/Auth/AuthStackNaivagtion";

export default function App() {

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#171725");
  }, []);

  return <AuthStackNavigation />;
}
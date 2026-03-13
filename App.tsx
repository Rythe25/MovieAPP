import { useEffect } from "react";
import * as SystemUI from "expo-system-ui";
import RootStackNavigation from "./src/navigation/Auth/RootStackNavigation";

export default function App() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#171725");
  }, []);

  return <RootStackNavigation />;
}

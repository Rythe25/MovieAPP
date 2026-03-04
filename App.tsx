import AuthStackNavigation from "./src/navigation/Auth/AuthStackNaivagtion";
import * as SystemUI from 'expo-system-ui';


export default function App() {
  SystemUI.setBackgroundColorAsync("#171725");
  return (
    <AuthStackNavigation/>
  );
}


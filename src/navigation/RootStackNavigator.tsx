import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootScreen from '../screen/RootScreen';
import RootStackParamList from './RootStackParamList';


const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: {
    headerShown: false
  },
  screens: {
    Root: RootScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default Navigation;
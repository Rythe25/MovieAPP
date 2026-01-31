import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/ScreenHeader";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Sign Up" />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#171725",
  // },
});

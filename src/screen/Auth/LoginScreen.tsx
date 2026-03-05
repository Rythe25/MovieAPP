import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import TextInputBox from "../../components/AuthComponents/TextInputBox";
import PasswordInputBox from "../../components/AuthComponents/PasswordInputBox";
import DefaultButton from "../../components/AuthComponents/DefaultButton";
import TextButton from "../../components/AuthComponents/TextButton";

const LoginScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Login" />
      {/* Top Section */}
      <View style={styles.sectionTopContainer}>
        <Text style={globalStyles.title}>Hi, Tiffany</Text>
        <Text style={globalStyles.subTitle}>Welcome back! please enter</Text>
        <Text style={globalStyles.subTitle}>details.</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.sectionMidContainer}>
        <View style={styles.inputContainer}>
          <TextInputBox label="Email" placeholder="Tiffanyjearsey@gamil.com" />
        </View>

        <View style={styles.inputContainer}>
          <PasswordInputBox
            label="Password"
            placeholder="*********************"
          />
        </View>
      </View>

      <View style={styles.sectionBottomContainer}>
        <View style={styles.forgotPasswordContainer}>
          <TextButton title="Forgot Password?" screen="PasswordReset" />
        </View>
        <DefaultButton title="Login" screen="HomeStack" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  sectionTopContainer: {
    // borderWidth:1,
    // borderColor:'white',
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionMidContainer: {
    // borderWidth:1,
    // borderColor:'white',
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  inputContainer: {
    // borderWidth:1,
    // borderColor:'white',
  },
  sectionBottomContainer: {
    // flex:1,
    // borderWidth:1,
    borderColor: "white",
    gap: 40,
  },
  forgotPasswordContainer: {
    marginTop: 20,
    flexDirection: "row-reverse",
  },
  checkBox: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    margin: 10,
    width: 30,
    height: 30,
  },
});

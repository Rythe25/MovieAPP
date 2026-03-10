import { StyleSheet, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import TextInputBox from "../../components/AuthComponents/TextInputBox";
import PasswordInputBox from "../../components/AuthComponents/PasswordInputBox";
import DefaultButton from "../../components/AuthComponents/DefaultButton";
import TextButton from "../../components/AuthComponents/TextButton";
import { AuthService } from "../../network/service/auth/authService";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const PasswordResetScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [sendCodeLoading, setSendCodeLoading] = useState(false);
  const [passwordResetLoading, setpasswordResetLoading] = useState(false);

  const handleSendCode = async () => {
    try {
      setSendCodeLoading(true);
      await AuthService.sendResetPasswordCode(email);
      Alert.alert("Success", "Verification code sent to your email");
    } catch (error: any) {
      Alert.alert(
        "Error",
        "Failed to send verification code",
        error.response?.data,
      );
    } finally {
      setSendCodeLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setpasswordResetLoading(true);

      await AuthService.resetPassword(email, code, password, confirmPassword);

      Alert.alert("Success", "Password reset successfully");

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Reset password failed";

      Alert.alert("Error", message);
    } finally {
      setpasswordResetLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="" />
      {/* Top Section */}
      <View style={styles.sectionTopContainer}>
        <Text style={globalStyles.title}>Reset Password</Text>
        <Text style={globalStyles.subTitle}>Recover Your account password</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.inputBoxContainer}>
        <TextInputBox
          label="Email"
          placeholder="Tiffanyjearsey@gamil.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.sendCodeContainer}>
        <TextButton title={sendCodeLoading ? "Send Code" : "Send Code"} onPress={handleSendCode} />
      </View>

      <View style={styles.inputBoxContainer}>
        <TextInputBox
          label="Code"
          placeholder="XXXXXX"
          value={code}
          onChangeText={setCode}
        />

        <PasswordInputBox
          label="Password"
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
        <PasswordInputBox
          label="Confirm Password"
          placeholder="********"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.sectionBottomContainer}>
        <DefaultButton
          title={passwordResetLoading ? "Resetting..." : "Reset Password"}
          onPress={handlePasswordReset}
        />
      </View>
    </SafeAreaView>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
  sectionTopContainer: {
    // borderWidth:1, borderColor:'white',
    // flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBoxContainer: {
    // borderWidth:1, borderColor:'white',
    // flex: 0.2,
    marginTop: 30,
    gap: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sendCodeContainer: {
    // borderWidth:1, borderColor:'white',
    alignItems: "flex-end",
    marginTop: 10,
    marginHorizontal: 20,
  },
  sectionBottomContainer: {
    flex: 1,
    marginTop: 30,
    borderColor: "white",
  },
});

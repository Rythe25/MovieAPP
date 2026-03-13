import { StyleSheet, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import DefaultButton from "../../components/AuthComponents/DefaultButton";
import TextButton from "../../components/AuthComponents/TextButton";
import TextInputBox from "../../components/AuthComponents/TextInputBox";

import { AuthService } from "../../network/service/auth/authService";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "../../navigation/Auth/RootStackParamList";

const VerificationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [reSendCodeLoading, setReSendCodeLoading] = useState(false);

  const handleVerify = async () => {
    try {
      if (code.length !== 6) {
        Alert.alert("Invalid Code", "Please enter the 6 digit code");
        return;
      }

      setLoading(true);

      await AuthService.verifyCode(code);

      await AsyncStorage.removeItem("token");

      Alert.alert("Success", "Account verified successfully");

      navigation.replace("Login");
    } catch (error: any) {
      const backendMessage =
        error.response?.data?.message || error.message || "Verification failed";

      Alert.alert("Verification Error", backendMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setReSendCodeLoading(true);
      await AuthService.sendCode();
      Alert.alert("Code Sent", "A new verification code was sent");
    } catch (error: any) {
      Alert.alert("Error", "Unable to resend code");
    } finally {
      setReSendCodeLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>

      <View style={styles.sectionTopContainer}>
        <Text style={globalStyles.title}>Verifying Your Account</Text>
        <Text style={globalStyles.lightFont}>
          We have sent a 6 digit code to your email
        </Text>
      </View>

      <View style={styles.sectionMidContainer}>
        <TextInputBox
          label="Verification Code"
          placeholder="123456"
          value={code}
          onChangeText={setCode}
        />
      </View>

      <View style={styles.sectionBottomContainer}>
        <DefaultButton
          title={loading ? "Verifying..." : "Continue"}
          onPress={handleVerify}
        />

        <View style={styles.resendContainer}>
          <Text style={globalStyles.lightFont}>
            Didn't receive code?{" "}
            <TextButton title={reSendCodeLoading ? "Processing..." : "Resend"} onPress={handleResend} />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  sectionTopContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionMidContainer: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  inputContainer: {
    backgroundColor: "#252836",
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  textInput: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 32,
    width: 50,
    color: "white",
  },
  sectionBottomContainer: {
    paddingTop: 50,
    borderColor: "white",
    gap: 30,
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "#12cdd9",
  },
});

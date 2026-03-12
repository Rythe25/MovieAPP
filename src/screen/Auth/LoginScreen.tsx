import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import TextInputBox from "../../components/AuthComponents/TextInputBox";
import PasswordInputBox from "../../components/AuthComponents/PasswordInputBox";
import DefaultButton from "../../components/AuthComponents/DefaultButton";
import TextButton from "../../components/AuthComponents/TextButton";
import { AuthService } from "../../network/service/auth/authService";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "../../navigation/Auth/RootStackParamList";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigatePasswordReset = () => {
    navigation.navigate("PasswordReset");
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const data = await AuthService.login({
        email: email.trim(),
        password: password,
      });

      if (!data.is_verify) {
        Alert.alert(
          "Verification Required",
          "Please verify your account first.",
        );
        return;
      }

      await AsyncStorage.setItem("token", data.token);

      navigation.reset({
        index: 0,
        routes: [{ name: "HomeStack" }],
      });
    } catch (error: any) {
      const status = error.response?.status;
      const backendMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      if (status === 401) {
        Alert.alert("Login Failed", "Invalid email or password");
      } else {
        Alert.alert(
          "Error",
          `Request failed (${status ?? "no-status"}): ${backendMessage}`,
        );
      }
    } finally {
      setLoading(false);
    }
  };

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
        <TextInputBox
          label="Email"
          placeholder="email@example.com"
          value={email}
          onChangeText={setEmail}
        />

        <PasswordInputBox
          label="Password"
          placeholder="**************"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.sectionBottomContainer}>
        <View style={styles.forgotPasswordContainer}>
          <TextButton
            title="Forgot Password?"
            onPress={navigatePasswordReset}
          />
        </View>

        <DefaultButton
          title={loading ? "Logging in..." : "Login"}
          onPress={handleLogin}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  sectionTopContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionMidContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  sectionBottomContainer: {
    gap: 40,
  },

  forgotPasswordContainer: {
    marginTop: 20,
    flexDirection: "row-reverse",
  },
});

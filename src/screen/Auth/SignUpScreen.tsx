import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import TextInputBox from "../../components/AuthComponents/TextInputBox";
import PasswordInputBox from "../../components/AuthComponents/PasswordInputBox";
import DefaultButton from "../../components/AuthComponents/DefaultButton";

import { AuthService } from "../../network/service/auth/authService";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "../../navigation/Auth/RootStackParamList";

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }

      setLoading(true);

      const data = await AuthService.Register({
        first_name: firstName,
        last_name: lastName,
        email: email.trim(),
        password: password,
        password_confirmation: confirmPassword,
      });

      await AsyncStorage.multiSet([
        ["token", data.token],
        ["user", JSON.stringify(data.user)]
      ]);
      await AuthService.sendCode();

      navigation.reset({
        index: 0,
        routes: [{ name: "Verification" }],
      });
    } catch (error: any) {
      const backendMessage =
        error.response?.data?.message || error.message || "Registration failed";

      Alert.alert("Register Error", backendMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Sign Up" />

      <View style={styles.sectionTopContainer}>
        <Text style={globalStyles.title}>Let's get started</Text>
        <Text style={globalStyles.lightFont}>The latest movies and series</Text>
        <Text style={globalStyles.lightFont}>are here</Text>
      </View>

      <View style={styles.sectionMidContainer}>
        <TextInputBox
          label="First Name"
          placeholder="John"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInputBox
          label="Last Name"
          placeholder="Doe"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInputBox
          label="Email"
          placeholder="john@email.com"
          value={email}
          onChangeText={setEmail}
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
          title={loading ? "Creating Account..." : "Sign Up"}
          onPress={handleRegister}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  sectionTopContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  sectionMidContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
    marginBottom: 30,
  },
  sectionBottomContainer: {
    flex: 1,
    borderColor: "white",
    gap: 40,
  },
  policyContainer: {
    marginTop: 20,
    flexDirection: "row",
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

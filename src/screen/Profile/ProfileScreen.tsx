import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthStackParamList from "../../navigation/Auth/AuthStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthService } from "../../network/service/auth/authService";

const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await AuthService.logout();
      await AsyncStorage.removeItem("token");
      navigation.replace("Login");
    } catch (error) {
      console.log("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>ProfileScreen</Text>

      <View style={styles.topSection}>
        <View style={styles.profileContainer}>
          <View style={styles.userProfile}></View>

          <View style={styles.userInfoContainer}></View>

          <View style={styles.editIconContiner}></View>
        </View>

        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.logoutButton}>
            <Text style={styles.textStyle}>{loading ? "Logging Out..." : "Log Out"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topSection: {
    borderWidth: 0.5,
    borderColor: "gray",
  },
  profileContainer: {
    flexDirection: "row",
  },
  userProfile: {},
  userInfoContainer: {},
  editIconContiner: {},
  logoutButton: {
    borderWidth: 1.5,
    borderColor: "#12cdd9",
    width: 370,
    height: 65,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#12cdd9",
    fontSize: 24,
    fontWeight: "500",
  },
});

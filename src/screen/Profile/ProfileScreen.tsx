import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../../components/styles/style";
import CardItem from "../../components/ProfileComponents/CardItem";
import TextButton from "../../components/AuthComponents/TextButton";
import PopupModal from "../../components/ProfileComponents/PopupModal";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthStackParamList from "../../navigation/Auth/AuthStackParamList";

import { AuthService } from "../../network/service/auth/authService";

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await AuthService.logout();
      await AsyncStorage.removeItem("token");

      navigation.reset({
        index: 0,
        routes: [{ name: "Root" }],
      });
    } catch (error) {
      console.log("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  const confirmLogout = () => {
    if (loading) return;
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = async () => {
    setShowLogoutModal(false);
    await handleLogout();
  };

  return (
    <SafeAreaView edges={["top"]} style={globalStyles.container}>
      <PopupModal
        visible={showLogoutModal}
        loading={loading}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Profile</Text>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.avatar}
          />

          <View style={styles.userInfo}>
            <Text style={styles.name}>Tiffany</Text>
            <Text style={styles.email}>tiffany@gmail.com</Text>
          </View>

          <TouchableOpacity style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile")} >
            <FontAwesome name="edit" size={25} color="#12cdd9" />
          </TouchableOpacity>
        </View>

        {/* Gold Plan */}
          <LinearGradient
            colors={["#F57C00", "#FF9F2E", "#FFA53A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.7 }}
            style={styles.planCard}
          >
            <View style={styles.planRow}>
              <View style={[styles.planBadge, styles.planGoldBadge]}>
                <FontAwesome name="star" size={16} color="#ffff" />
              </View>

              <View style={styles.planInfo}>
                <Text style={styles.planTitle}>Premium Member</Text>
                <Text style={styles.planDescription}>
                  New Movies are coming for you,{"\n"}Download Now!
                </Text>
              </View>
            </View>

          </LinearGradient>

        {/* Account */}
        <View style={styles.accountCard}>
          <Text style={styles.sectionTitle}>Account</Text>

          <CardItem icon="id-badge" label="Member" onPress={() => {}} />

          <View style={styles.accountDivider} />

          <CardItem icon="lock" label="Change Password" onPress={() => {}} />
        </View>

        {/* General */}
        <View style={styles.accountCard}>
          <Text style={styles.sectionTitle}>General</Text>
          <CardItem icon="bell" label="Notification" onPress={() => {}} />
          <View style={styles.accountDivider} />

          <CardItem icon="language" label="Language" onPress={() => {}} />
          <View style={styles.accountDivider} />

          <CardItem icon="globe" label="Country" onPress={() => {}} />
          <View style={styles.accountDivider} />

          <CardItem icon="trash" label="Clear Cache" onPress={() => {}} />
        </View>

        {/* More */}
        <View style={styles.accountCard}>
          <Text style={styles.sectionTitle}>More</Text>
          <CardItem icon="file-text" label="Legal and Policy" onPress={() => {}}/>
          <View style={styles.accountDivider} />

          <CardItem icon="life-ring" label="Help and Feedback" onPress={() => {}}/>
          <View style={styles.accountDivider} />

          <CardItem icon="info-circle" label="About Us" onPress={() => {}} />
        </View>

        {/* Logout */}
        <TextButton
          variant="block"
          title={loading ? "Logging Out..." : "Log Out"}
          onPress={confirmLogout}
          containerStyle={styles.logoutButton}
          textStyle={styles.textStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    // borderWidth: 1, borderColor: 'white'
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1d2b",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#353535",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  email: {
    color: "#868692",
    fontSize: 14,
  },
  editButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    marginVertical: 10
  },
  planCard: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  planGoldCard: {
    borderColor: "#d4af37",
    backgroundColor: "#2f2a1f",
  },
  planRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  planBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  planGoldBadge: {
    backgroundColor: "#ffffff63",
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
  },
  planDescription: {
    color: "#e5e7eb",
    fontSize: 16,
  },
  accountCard: {
    backgroundColor: "#1f1d2b",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2f3142",
    paddingVertical: 4,
    marginBottom: 24,
  },
  accountDivider: {
    height: 1,
    backgroundColor: "#2f3142",
    marginHorizontal: 16,
  },
  logoutButton: {
    borderWidth: 1.5,
    borderColor: "#12cdd9",
    height: 65,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  textStyle: {
    color: "#12cdd9",
    fontSize: 24,
    fontWeight: "500",
  },
});

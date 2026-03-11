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
import globalStyles from "../../components/styles/style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthStackParamList from "../../navigation/Auth/AuthStackParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthService } from "../../network/service/auth/authService";
import { FontAwesome } from "@expo/vector-icons";
import TextButton from "../../components/AuthComponents/TextButton";
import CardItem from "../../components/ProfileComponents/CardItem";

const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [loading, setLoading] = useState(false);

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

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Profile</Text>

        <View style={styles.profileCard}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.avatar}
          />

          <View style={styles.userInfo}>
            <Text style={styles.name}>Tiffany</Text>
            <Text style={styles.email}>tiffany@gmail.com</Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <FontAwesome name="edit" size={20} color="#12cdd9" />
          </TouchableOpacity>
        </View>

        {(() => {
          const activePlan: "silver" | "gold" | "diamond" = "gold";

          const planConfig = {
            silver: {
              title: "Standard Member",
              description: "Starter plan for casual viewers.",
              cardStyle: styles.planSilverCard,
              badgeStyle: styles.planSilverBadge,
            },
            gold: {
              title: "Premium Member",
              description: "Most popular plan with HD access.",
              cardStyle: styles.planGoldCard,
              badgeStyle: styles.planGoldBadge,
            },
            diamond: {
              title: "Premium Plus Member",
              description: "All-access plan with premium perks.",
              cardStyle: styles.planDiamondCard,
              badgeStyle: styles.planDiamondBadge,
            },
          } as const;

          const plan = planConfig[activePlan];

          return (
            <View style={[styles.planCard, plan.cardStyle]}>
              <View style={styles.planRow}>
                <View style={[styles.planBadge, plan.badgeStyle]}>
                  <FontAwesome name="diamond" size={16} color="#0b0f1a" />
                </View>
                <View style={styles.planInfo}>
                  <Text style={styles.planTitle}>{plan.title}</Text>
                  <Text style={styles.planDescription}>{plan.description}</Text>
                </View>
              </View>
            </View>
          );
        })()}

        // Account
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.accountCard}>
          <CardItem icon="id-badge" label="Member" onPress={() => {}} />

          <View style={styles.accountDivider} />

          <CardItem icon="lock" label="Change Password" onPress={() => {}} />
        </View>

        // General
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.accountCard}>
          <CardItem icon="bell" label="Notification" onPress={() => {}} />

          <View style={styles.accountDivider} />

          <CardItem icon="language" label="Language" onPress={() => {}} />

          <View style={styles.accountDivider} />

          <CardItem icon="globe" label="Country" onPress={() => {}} />

          <View style={styles.accountDivider} />

          <CardItem icon="trash" label="Clear Cache" onPress={() => {}} />
        </View>

        // More
        <Text style={styles.sectionTitle}>More</Text>
        <View style={styles.accountCard}>
          <CardItem
            icon="file-text"
            label="Legal and Policy"
            onPress={() => {}}
          />

          <View style={styles.accountDivider} />

          <CardItem
            icon="life-ring"
            label="Help and Feedback"
            onPress={() => {}}
          />

          <View style={styles.accountDivider} />

          <CardItem icon="info-circle" label="About Us" onPress={() => {}} />
        </View>

        <TextButton
          variant="block"
          title={loading ? "Logging Out..." : "Log Out"}
          onPress={handleLogout}
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
    paddingBottom: 24,
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
    backgroundColor: "#1f1d2b",
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
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#12cdd9",
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  planCard: {
    backgroundColor: "#1f1d2b",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#12cdd9",
    marginBottom: 24,
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
  planInfo: {
    flex: 1,
  },
  planTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  planDescription: {
    color: "#e5e7eb",
    fontSize: 12,
  },
  planSilverCard: {
    borderColor: "#c0c0c0",
    backgroundColor: "#2a2c36",
  },
  planGoldCard: {
    borderColor: "#d4af37",
    backgroundColor: "#2f2a1f",
  },
  planDiamondCard: {
    borderColor: "#7dd3fc",
    backgroundColor: "#1f2b33",
  },
  planSilverBadge: {
    backgroundColor: "#c0c0c0",
  },
  planGoldBadge: {
    backgroundColor: "#d4af37",
  },
  planDiamondBadge: {
    backgroundColor: "#7dd3fc",
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
    width: "100%",
    height: 65,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  textStyle: {
    color: "#12cdd9",
    fontSize: 24,
    fontWeight: "500",
  },
});

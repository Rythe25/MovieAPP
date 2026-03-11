import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from "../../components/styles/style";
import TextInputBox from "../../components/AuthComponents/TextInputBox";
import PasswordInputBox from "../../components/AuthComponents/PasswordInputBox";
import TextButton from "../../components/AuthComponents/TextButton";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("Tiffany");
  const [email, setEmail] = useState("tiffany@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="chevron-left" size={18} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarWrap}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.avatar}
          />
          <View style={styles.editBadge}>
            <FontAwesome name="pencil" size={14} color="#0b0f1a" />
          </View>
        </View>

        <Text style={styles.name}>Tiffany</Text>
        <Text style={styles.email}>tiffany@gmail.com</Text>
      </View>

      <View style={styles.form}>
        <TextInputBox
          label="Full Name"
          placeholder="Enter full name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInputBox
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />
        <PasswordInputBox
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
        />
        <TextInputBox
          label="Phone Number"
          placeholder="Enter phone number"
          value={phone}
          onChangeText={setPhone}
        />

        <TextButton
          variant="block"
          title="Save Changes"
          onPress={() => {}}
          containerStyle={styles.saveButton}
          textStyle={styles.saveText}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252836",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  headerSpacer: {
    width: 36,
    height: 36,
  },
  profileSection: {
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  avatarWrap: {
    position: "relative",
    marginBottom: 8,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#1f1d2b",
  },
  editBadge: {
    position: "absolute",
    right: 4,
    bottom: 4,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#12cdd9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1f1d2b",
  },
  name: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  email: {
    color: "#868692",
    fontSize: 14,
  },
  form: {
    alignItems: "center",
    gap: 16,
  },
  saveButton: {
    borderWidth: 1.5,
    borderColor: "#12cdd9",
    width: 360,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  saveText: {
    color: "#12cdd9",
    fontSize: 18,
    fontWeight: "600",
  },
});

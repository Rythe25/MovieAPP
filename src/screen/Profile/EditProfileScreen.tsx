import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import globalStyles from "../../components/styles/style";
import TextInputBox from "../../components/AuthComponents/TextInputBox";
import DefaultButton from "../../components/AuthComponents/DefaultButton";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import { AuthService } from "../../network/service/auth/authService";
import { User } from "../../network/api/type/authType";
import { FontAwesome } from "@expo/vector-icons";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const stored = await AsyncStorage.getItem("user");

    if (!stored) return;

    const u: User = JSON.parse(stored);

    setUser(u);
    setFirstName(u.first_name);
    setLastName(u.last_name);
    setEmail(u.email);
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const updatedUser = await AuthService.updateProfile({
        first_name: firstName,
        last_name: lastName,
        email: email,
      });

      await AsyncStorage.setItem(
        "user",
        JSON.stringify(updatedUser.user)
      );

      setUser(updatedUser.user);

      navigation.goBack();

    } catch (err) {
      console.log("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Edit Profile" />

      <View style={styles.profileSection}>
        <View style={styles.avatarWrap}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.avatar}
          />

          <TouchableOpacity style={styles.editBadge}>
            <FontAwesome name="pencil" size={14} color="#0b0f1a" />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.profileSection}>
        <Text style={styles.name}>
          {user?.first_name} {user?.last_name}
        </Text>

        <Text style={styles.email}>
          {user?.email}
        </Text>
      </View>

      <View style={styles.form}>
        <TextInputBox
          label="First Name"
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInputBox
          label="Last Name"
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInputBox
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />

        <DefaultButton
          title={loading ? "Saving..." : "Save Changes"}
          onPress={handleSave}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarWrap: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  editBadge: {
    position: "absolute",
    right: 10,
    bottom: 4,
    width: 32,
    height: 32,
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
    gap: 30,
  },
});
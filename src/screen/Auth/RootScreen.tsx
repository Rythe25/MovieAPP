import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import globalStyles from "../../components/styles/style";
import DefaultButton from "../../components/AuthComponents/DefaultButton";
import TextButton from "../../components/AuthComponents/TextButton";

const RootScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.sectionTopContainer}>
        <View style={styles.headerContainer}>
          {/* logo and title */}
          <View style={styles.logoAndTitleContainer}>
            <View style={styles.logoContainer}>
              <Feather name="tv" size={100} color="#12cdd9" />
              <Text style={styles.logoText}> CN </Text>
            </View>

            <Text style={globalStyles.title}>CINEMAX</Text>
          </View>

          <View style={styles.subTitileContainer}>
            <Text style={globalStyles.subTitle}>Enter your registerd </Text>
            <Text style={globalStyles.subTitle}>Phone Number to Sign Up</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionMidContainer}>
        {/* signup button and login text */}
        <DefaultButton title="Sign Up" screen="SignUp" />

        {/* signup text */}
        <View style={styles.loginTextContainer}>
          <Text style={globalStyles.lightFont}>
            Already have an account? <TextButton title="Login" screen="Login" />
          </Text>
        </View>
      </View>

      <View style={styles.sectionBottomContainer}>
        <View style={styles.signUpWithTextContainer}>
          <View style={styles.signUpLine} />
          <Text style={styles.signUpText}>Or Sign up with</Text>
          <View style={styles.signUpLine} />
        </View>

        <View style={styles.signUpWithLogoContainer}>
          <View style={styles.googleContainer}>
            <AntDesign name="google" size={32} color="black" />
          </View>

          <View style={styles.appleContainer}>
            <AntDesign name="apple" size={32} color="white" />
          </View>

          <View style={styles.facebookContainer}>
            <FontAwesome name="facebook-f" size={32} color="white" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Top Section
  sectionTopContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    flex: 1.3,
  },
  headerContainer: {
    gap: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: "center",
  },
  logoText: {
    backgroundColor: "#12cdd9",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 5,
    fontWeight: "500",
    top: -55,
  },
  logoAndTitleContainer: {
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  subTitileContainer: {
    alignItems: "center",
  },

  // Mid Section
  sectionMidContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    flex: 0.5,
  },
  loginTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Bottom Section
  sectionBottomContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    flex: 1,
    alignItems: "center",
  },
  signUpWithTextContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    margin: 10,
    marginBottom: 0,
    flex: 0.2,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  signUpLine: {
    width: 80,
    height: 1,
    backgroundColor: "#444",
  },
  signUpText: {
    fontSize: 16,
    color: "#868692",
  },
  signUpWithLogoContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    margin: 10,
    marginTop: 10,
    paddingTop: 15,
    flex: 1,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 20,
  },
  googleContainer: {
    borderRadius: 40,
    backgroundColor: "#f3f8fb",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  appleContainer: {
    borderRadius: 40,
    backgroundColor: "#252836",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  facebookContainer: {
    borderRadius: 40,
    backgroundColor: "#4267b2",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RootScreen;

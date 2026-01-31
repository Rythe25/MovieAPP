import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/ScreenHeader";
import TextInputBox from "../../components/TextInputBox";
import PasswordInputBox from "../../components/PasswordInputBox";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="Sign Up" />
          {/* Top Section */}
          <View style={styles.sectionTopContainer}>
            <Text style={globalStyles.title}>
                Let's get started
            </Text>
            <Text style={globalStyles.lightFont}>
                The latest movies and series 
            </Text>
            <Text style={globalStyles.lightFont}>
                are here
            </Text>
          </View>

          {/* Middle Section */}
          <View style={styles.sectionMidContainer}>
            <View style={styles.inputContainer}>
              <TextInputBox label="Full Name" placeholder="Tiffany" />
            </View>

            <View style={styles.inputContainer}>
              <TextInputBox label="Email" placeholder="Tiffanyjearsey@gamil.com" />
            </View>

            <View style={styles.inputContainer}>
              <PasswordInputBox  label="Password" placeholder="*********************" />
            </View>

          </View>

          <View style={styles.sectionBottomContainer}>

          </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    sectionTopContainer: {
      flex:0.3,
      borderWidth:1,
      borderColor:'white',
      justifyContent:'center',
      alignItems: 'center'
    },
    sectionMidContainer: {
      flex:1,
      borderWidth:1,
      borderColor:'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30
    },
    inputContainer:{
      // borderWidth:1,
      // borderColor:'white',
    },
    sectionBottomContainer: {
      flex:1,
      borderWidth:1,
      borderColor:'white'
    }
});

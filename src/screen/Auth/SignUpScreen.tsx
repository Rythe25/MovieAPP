import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/ScreenHeader";
import TextInputBox from "../../components/TextInputBox";
import PasswordInputBox from "../../components/PasswordInputBox";
import DefaultButton from "../../components/DefaultButton";
import TextButton from "../../components/TextButton";

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
              <TextInputBox label="First Name" placeholder="Tiffany" />
            </View>

            <View style={styles.inputContainer}>
              <TextInputBox label="Last Name" placeholder="Jersey" />
            </View>

            <View style={styles.inputContainer}>
              <TextInputBox label="Email" placeholder="Tiffanyjearsey@gamil.com" />
            </View>

            <View style={styles.inputContainer}>
              <PasswordInputBox  label="Password" placeholder="*********************" />
            </View>
          </View>

          <View style={styles.sectionBottomContainer}>
              <View style={styles.policyContainer}>
                  <View>
                    <View style={styles.checkBox}>

                    </View>
                  </View>

                  <View>
                    <Text style={globalStyles.lightFont}>I agree to the <TextButton title="Terms and Services" screen="SignUp"/> </Text>  
                    <Text style={globalStyles.lightFont}>and <TextButton title="Privacy Policy" screen="SignUp"/></Text> 
                  </View>
              </View>

              <DefaultButton title="Sign Up" screen="Verification"/>
          </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    sectionTopContainer: {
      // borderWidth:1,
      // borderColor:'white',
      flex:0.3,
      justifyContent:'center',
      alignItems: 'center'
    },
    sectionMidContainer: {
      // borderWidth:1,
      // borderColor:'white',
      // flex:0.8,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap:30
    },
    inputContainer:{
      // borderWidth:1,
      // borderColor:'white',
    },
    sectionBottomContainer: {
      // flex:1,
      // borderWidth:1,
      flex:0.1,
      borderColor:'white',
      gap:40
    },
    policyContainer: {
      marginTop: 20,
      flexDirection: 'row'
    },
    checkBox: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      margin: 10,
      width: 30,
      height: 30
    }
});

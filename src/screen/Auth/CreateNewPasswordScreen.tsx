import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/ScreenHeader";
import TextInputBox from "../../components/TextInputBox";
import PasswordInputBox from "../../components/PasswordInputBox";
import DefaultButton from "../../components/DefaultButton";
import TextButton from "../../components/TextButton";

const CreateNewPasswordScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="" />
          {/* Top Section */}
          <View style={styles.sectionTopContainer}>
            <Text style={globalStyles.title}>
                Create New Password
            </Text>
            <Text style={globalStyles.subTitle}>
                Enter your new password
            </Text>
          </View>

          {/* Middle Section */}
          <View style={styles.sectionMidContainer}>
            <View style={styles.inputContainer}>
              <PasswordInputBox label="New Password" placeholder="*********************" />
            </View>

            <View style={styles.inputContainer}>
              <PasswordInputBox  label="Confirm Password" placeholder="*********************" />
            </View>
          </View>

          <View style={styles.sectionBottomContainer}>
              <DefaultButton title="Reset" screen="PasswordVerification"/>
          </View>
    </SafeAreaView>
  );
};

export default CreateNewPasswordScreen;

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
      flex:0.3,
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
      // flex:1,
      // borderWidth:1,
      borderColor:'white',
      paddingTop: 30
    },
    forgotPasswordContainer: {
      marginTop: 20,
      flexDirection: 'row-reverse'
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

import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/ScreenHeader";
import TextInputBox from "../../components/TextInputBox";
import PasswordInputBox from "../../components/PasswordInputBox";
import DefaultButton from "../../components/DefaultButton";
import TextButton from "../../components/TextButton";

const PasswordResetScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="" />
          {/* Top Section */}
          <View style={styles.sectionTopContainer}>
            <Text style={globalStyles.title}>
                Reset Password
            </Text>
            <Text style={globalStyles.subTitle}>
                Recover Your account password
            </Text>
          </View>

          {/* Middle Section */}
          <View style={styles.sectionMidContainer}>
            <View style={styles.inputContainer}>
              <TextInputBox label="Email" placeholder="Tiffanyjearsey@gamil.com" />
            </View>
          </View>

          <View style={styles.sectionBottomContainer}>
              <DefaultButton title="Next" screen="CreateNewPassword"/>
          </View>
    </SafeAreaView>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
    sectionTopContainer: {
      // borderWidth:1,
      // borderColor:'white',
      flex:0.2,
      justifyContent:'center',
      alignItems: 'center'
    },
    sectionMidContainer: {
      // borderWidth:1,
      // borderColor:'white',
      flex:0.2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer:{
      // borderWidth:1,
      // borderColor:'white',
    },
    sectionBottomContainer: {
      // flex:1,
      // borderWidth:1,
      borderColor:'white',
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

import { StyleSheet, View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import ScreenHeader from "../../components/ScreenHeader";
import DefaultButton from "../../components/DefaultButton";
import TextButton from "../../components/TextButton";
import { useState } from "react";
import TextInputBox from "../../components/TextInputBox";

const VerificationScreen = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScreenHeader title="" />
          {/* Top Section */}
          <View style={styles.sectionTopContainer}>
            <Text style={globalStyles.title}>
                Verifying Your Account
            </Text>
            <Text style={globalStyles.lightFont}>
                We have just sent uou 6 digit code via your
            </Text>
            <Text style={globalStyles.lightFont}>
                email <Text style={{color:'white'}}>example@gmail.com</Text>
            </Text>
          </View>

          {/* Middle Section */}
          <View style={styles.sectionMidContainer}>
              <TextInputBox label="Verification Code" placeholder="xxxxxx" />

          </View>

          <View style={styles.sectionBottomContainer}>
              <DefaultButton title="Continue" screen="Login"/>

              <View style={styles.resendContainer}>
                  <Text style={globalStyles.lightFont}>Didn't recieve code? <TextButton title="Resend" screen="Verification"/> </Text>   
              </View>
          </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

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
      flex:0.15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15
    },
    inputContainer:{
      // borderWidth:1,
      // borderColor:'#12cdd9',
      backgroundColor: '#252836',
      flex: 1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
    },
    textInput:{
      // borderWidth:1,
      // borderColor:'white',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 32,
      width:50,
      color: 'white'
    },
    sectionBottomContainer: {
      // flex:1,
      // borderWidth:1,
      paddingTop: 50,
      borderColor:'white',
      gap:30
    },
    resendContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    inputFocused: {
      borderWidth: 1,
      borderColor: "#12cdd9",
  },
});

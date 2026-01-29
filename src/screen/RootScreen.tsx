import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import DefaultButton from '../components/DefaultButton';
import globalStyles from './styles/style';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';

const RootScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
        <View>
            {/* Top Section */}
            <View style={rootStyle.titleSection}>
            {/* logo and title */}
                <View style={rootStyle.titleSectionLogoContainer}>
                    <Feather name="tv" size={104} color="#12cdd9" />
                    <Text style={rootStyle.headerStyle}>CINEMAX</Text>
                </View>
                
                <View style={rootStyle.titleSectionTextContainer}>
                    <Text style={rootStyle.fontStyle}>Enter your registerd </Text>
                    <Text style={rootStyle.fontStyle}>Phone Number to Sign Up</Text>
                </View>
            </View>

            {/* signup button and login text */}
            <View style={rootStyle.buttonSection}>
                <DefaultButton title='Sign Up'/>
            </View>

            {/* Bottom Section */}
            <View style={rootStyle.bottomSection}>
                {/* signup text */}
                <View>
                    <Text style={rootStyle.fontStyle}>Already have an account?</Text>
                </View>

                {/* signup text */}
                <View>
                    <Text style={rootStyle.fontStyle}>----------------</Text>
                </View>

                {/* login logo */}
                <View style={rootStyle.logoContainer}>
                    <View style={rootStyle.googleContainer}>

                    </View>

                    <View style={rootStyle.appleContainer}>
                        <AntDesign name="apple" size={24} color="#f3f8fb" />
                    </View>

                    <View style={rootStyle.facebookContainer}>
                        <FontAwesome name="facebook" size={24} color="#f3f8fb" />
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}

const rootStyle = StyleSheet.create({
    titleSection: {
        // borderWidth: 1,
        // borderColor: 'white',
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60
    },
    titleSectionLogoContainer: {
        alignItems: 'center',
        gap: 20
    },
    titleSectionTextContainer: {
        alignItems: 'center'
    },
    headerStyle:{
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold'
    },
    fontStyle:{
        color: '#868692',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonSection: {
        // borderWidth: 1,
        // borderColor: 'white',
        flex: 0.1,
        // paddingTop: 65
    },
    bottomSection: {
        borderWidth: 1,
        borderColor: 'white',
        flex: 1,
        alignItems: 'center',
        gap: 35
    },
    logoContainer: {
        flexDirection: 'row',
        gap: 30
    },
    googleContainer: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#f3f8fb',
        borderRadius: 45,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appleContainer: {
        backgroundColor: '#252836',
        borderRadius: 45,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookContainer: {
        backgroundColor: '#4267b2',
        borderRadius: 45,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default RootScreen;
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import globalStyles from '../../components/styles/style';
import DefaultButton from '../../components/DefaultButton';
import TextButton from '../../components/TextButton';

const RootScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionTopContainer}>
                <View style={styles.titleSectionContainer}>
                {/* logo and title */}
                    <View style={styles.logoAndHeaderContainer}>
                        <Feather name="tv" size={100} color="#12cdd9" />
                        <Text style={styles.headerStyle}>CINEMAX</Text>
                    </View>
                    
                    <View style={styles.subTitileContainer}>
                        <Text style={styles.subTitle}>Enter your registerd </Text>
                        <Text style={styles.subTitle}>Phone Number to Sign Up</Text>
                    </View>
                </View>
            </View>

            <View style={styles.sectionMidContainer}>
                {/* signup button and login text */}
                <DefaultButton title='Sign Up' screen='SignUp'/>

                {/* signup text */}
                <View style={styles.loginTextContainer}>
                    <Text style={globalStyles.font}>Already have an account? <TextButton  title='Login' screen='Login'/></Text> 
                </View>
            </View>

            <View style={styles.sectionBottomContainer}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        backgroundColor: '#171725'
    },
    sectionTopContainer:{
        flex:1.3,
        borderWidth: 1,
        borderColor: 'white'
    },
    sectionMidContainer:{
        flex: 0.5,
        borderWidth: 1,
        borderColor: 'white'
    },
    sectionBottomContainer:{
        flex:1,
        borderWidth: 1,
        borderColor: 'white'
    },
    headerStyle:{
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '600'
    },
    subTitle:{
        color: '#868692',
        fontSize: 18,
        fontWeight: '500'
    },
    titleSectionContainer: {
        gap: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoAndHeaderContainer: {
        alignItems: 'center',
        gap: 20,
        marginBottom: 10
    },
    subTitileContainer: {
        alignItems: 'center',
    },
    loginTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    logoContainer: {
        flexDirection: 'row',
        gap: 30
    },
});

export default RootScreen;
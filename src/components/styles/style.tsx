import { StyleSheet, Text, View } from 'react-native';

// Auth Screens
// button and logo #12cdd9
// background #171725
// title #ffffff
// text #868692
// google #f3f8fb, apple #252836, facebook #4267b2 

// Home Screens

const globalStyles = StyleSheet.create({
  rootContainer:{
      padding:20,
      flex:1,
      backgroundColor: '#171725'
  },
  container:{
      padding:20,
      paddingBottom: 0,
      flex:1,
      backgroundColor: '#1f1d2b'
  },
  homeContainer:{
      flex:1,
    //   padding: 15,
      paddingBottom: 0,
      backgroundColor: '#1f1d2b',
  },
  title:{
      color: '#ffffff',
      fontSize: 32,
      fontWeight: '600'
  },
  subTitle:{
      color: '#868692',
      fontSize: 18,
      fontWeight: '500'
  },
  lightFont:{
    fontSize: 18,
    color: '#868692'
  },
  homeTitle:{
    fontSize : 24,
    color:'#ffffff',
    fontWeight: 'bold'
  }
});

export default globalStyles;
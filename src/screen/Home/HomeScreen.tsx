import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyles from '../../components/styles/style'
import SearchBox from '../../components/HomeComponents/SearchBox'

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>

      <View style={styles.topSection}>
          <Text style={globalStyles.homeTitle}>What do you want to watch?</Text>
          <SearchBox placeholder='Search'></SearchBox>
      </View>

      <View style={styles.midSection}>
          <ScrollView horizontal={true}>
            
          </ScrollView>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topSection:{
    gap: 20
  },
  midSection:{

  }
})
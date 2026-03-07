import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyles from '../../components/styles/style'
import SearchBox from '../../components/HomeComponents/SearchBox'
import TrendingCard from '../../components/HomeComponents/TrendingCard'
import HomeTabHeader from '../../components/HomeComponents/HomeTabHeader'

export default function HomeScreen() {
  const categories = ['Now Playing', 'Upcoming', 'Top Rated', 'Popular']
  return (
    <SafeAreaView style={globalStyles.homeContainer} edges={['top']}>

      <View style={styles.topSection}>
          <Text style={globalStyles.homeTitle}>What do you want to watch?</Text>
          <SearchBox placeholder='Search'></SearchBox>
      </View>

      <View style={styles.midSection}>
          <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={{ height: 290 }} >
            <TrendingCard number={1}></TrendingCard>
            <TrendingCard number={2}></TrendingCard>
            <TrendingCard number={3}></TrendingCard>
          </ScrollView>
      </View>

      <View style={styles.bottomSection}>
          <HomeTabHeader title={categories}></HomeTabHeader>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topSection:{
    // borderColor: 'white', borderWidth: 1,
    gap: 20
  },
  midSection:{
    // borderColor: 'white', borderWidth: 1,
    paddingTop: 10
  },
  bottomSection:{
    flex:1,
    borderColor: 'white', borderWidth: 1,
  }
})
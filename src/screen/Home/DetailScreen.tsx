import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import TabHeader from "../../components/HomeComponents/TabHeader";

const tabs = ["About Movie", "Reviews", "Cast"];

const reviews = [
  {
    id: 1,
    name: "Iqbal Shafiq Rozan",
    rating: 6.3,
    text: "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets.",
  },
  {
    id: 2,
    name: "Iqbal Shafiq Rozan",
    rating: 6.3,
    text: "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets.",
  },
];

const cast = [
  {
    id: 1,
    name: "Tom Holland",
    image: "https://i.pravatar.cc/200?img=10",
  },
  {
    id: 2,
    name: "Zendaya",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    id: 3,
    name: "Benedict Cumberbatch",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    id: 4,
    name: "Brad Pitt",
    image: "https://i.pravatar.cc/200?img=13",
  },
  {
    id: 5,
    name: "Tom Holland",
    image: "https://i.pravatar.cc/200?img=10",
  },
  {
    id: 6,
    name: "Zendaya",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    id: 7,
    name: "Benedict Cumberbatch",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    id: 8,
    name: "Brad Pitt",
    image: "https://i.pravatar.cc/200?img=13",
  },
];

const DetailScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Detail" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w780/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
            }}
            style={styles.banner}
          />

          {/* Rating */}
          <View style={styles.ratingBadge}>
            <FontAwesome name="star" size={12} color="#ffb800" />
            <Text style={styles.ratingText}>9.5</Text>
          </View>
        </View>

        {/* Movie Info */}
        <View style={styles.movieInfoContainer}>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w342/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            }}
            style={styles.poster}
          />

          <View style={styles.movieText}>
            <Text style={styles.movieTitle}>Spiderman No Way Home</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <FontAwesome name="calendar" size={12} color="#868692" />
          <Text style={styles.metaText}>2021</Text>
          <Text style={styles.metaDivider}>|</Text>
          <AntDesign name="clock-circle" size={12} color="#868692" />
          <Text style={styles.metaText}>148 Minutes</Text>
          <Text style={styles.metaDivider}>|</Text>
          <FontAwesome name="film" size={12} color="#868692" />
          <Text style={styles.metaText}>Action</Text>
        </View>

       {/* Tabs */}
        <View style={{ marginTop: 30 }}>
          <TabHeader title={tabs} onTabChange={setActiveTab} />
        </View>

        {/* Tab Content */}
        <View style={styles.contentContainer}>

          {/* ABOUT */}
          {activeTab === 0 && (
            <Text style={styles.aboutText}>
              From DC Comics comes the Suicide Squad, an antihero team of
              incarcerated supervillains who act as deniable assets for the
              United States government, undertaking high-risk black ops
              missions in exchange for commuted prison sentences.
            </Text>
          )}

          {/* REVIEWS */}
          {activeTab === 1 && (
            <View>
              {reviews.map((item) => (
                <View key={item.id} style={styles.reviewItem}>

                  <View style={styles.reviewImgScore}>
                    <Image
                      source={{ uri: "https://i.pravatar.cc/200" }}
                      style={styles.reviewAvatar}
                    />

                    <Text style={styles.reviewRating}>{item.rating}</Text>
                  </View>


                  <View style={styles.reviewTextContainer}>
                    <Text style={styles.reviewName}>{item.name}</Text>
                    <Text style={styles.reviewText}>{item.text}</Text>
                  </View>

                </View>
              ))}
            </View>
          )}

          {/* CAST */}
          {activeTab === 2 && (
            <FlatList
              data={cast}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={styles.castItem}>

                  <Image
                    source={{ uri: item.image }}
                    style={styles.castImg}
                  />

                  <Text style={styles.castName}>{item.name}</Text>

                </View>
              )}
            />
          )}

        </View>

      </ScrollView>
    </SafeAreaView>

  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    flex:1,
    backgroundColor: '#1f1d2b'
  },
  bannerContainer: {
    position: "relative",
  },
  banner: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 20,
  },
  ratingBadge: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#1f1d2b",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#ffb800",
    fontWeight: "600",
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: -80,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    gap: 15,
  },
  poster: {
    width: 100,
    height: 140,
    borderRadius: 16,
  },
  movieText: {
    flex: 1,
    justifyContent: "flex-end",
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "600",
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 20,
  },
  metaText: {
    color: "#868692",
    fontSize: 16,
  },
  metaDivider: {
    color: "#868692",
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  aboutText: {
    color: "white",
    lineHeight: 22,
    fontSize: 16,
  },
  reviewItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "flex-start",
    gap: 10,
  },
  reviewImgScore: {
    alignItems: 'center',
    gap:10
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewName: {
    color: "white",
    fontWeight: "600",
    marginBottom: 4,
  },
  reviewText: {
    color: "white",
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
  },
  reviewRating: {
    color: "#0296e5",
    fontWeight: "600",
  },
  castItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  castImg: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  castName: {
    color: "white",
    marginTop: 8,
    textAlign: "center",
  },
});
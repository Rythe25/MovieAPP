import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";

import ScreenHeader from "../../components/AuthComponents/ScreenHeader";
import TabHeader from "../../components/HomeComponents/TabHeader";

import {
  fetchMovieDetail,
  fetchMovieReviews,
  fetchMovieCast,
} from "../../network/service/movie/movieService";
import {
  Cast,
  MovieDetail,
  Review,
  RouteParams,
} from "../../network/api/type/movieType";

const tabs = ["About Movie", "Reviews", "Cast"];

const DetailScreen = () => {
  type DetailRouteProp = RouteProp<{ Detail: RouteParams }, "Detail">;
  const route = useRoute<DetailRouteProp>();
  const { movieId } = route.params;

  const [activeTab, setActiveTab] = useState(0);
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
    loadReviews();
    loadCast();
  }, []);

  const loadMovie = async () => {
    try {
      const data = await fetchMovieDetail(movieId);
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadReviews = async () => {
    try {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadCast = async () => {
    try {
      const data = await fetchMovieCast(movieId);
      setCast(data.slice(0, 12));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Detail" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w780${movie?.backdrop_path}`,
            }}
            style={styles.banner}
          />

          <View style={styles.ratingBadge}>
            <FontAwesome name="star" size={12} color="#ffb800" />
            <Text style={styles.ratingText}>
              {movie?.vote_average?.toFixed(1)}
            </Text>
          </View>
        </View>

        {/* Movie Info */}
        <View style={styles.movieInfoContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w342${movie?.poster_path}`,
            }}
            style={styles.poster}
          />

          <View style={styles.movieText}>
            <Text style={styles.movieTitle}>{movie?.title}</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <FontAwesome name="calendar" size={12} color="#868692" />
          <Text style={styles.metaText}>
            {movie?.release_date?.split("-")[0]}
          </Text>

          <Text style={styles.metaDivider}>|</Text>

          <AntDesign name="clock-circle" size={12} color="#868692" />
          <Text style={styles.metaText}>{movie?.runtime} Minutes</Text>

          <Text style={styles.metaDivider}>|</Text>

          <FontAwesome name="film" size={12} color="#868692" />
          <Text style={styles.metaText}>{movie?.genres?.[0]?.name}</Text>
        </View>

        {/* Tabs */}
        <View style={{ marginTop: 30 }}>
          <TabHeader title={tabs} onTabChange={setActiveTab} />
        </View>

        {/* Tab Content */}
        <View style={styles.contentContainer}>
          {/* ABOUT */}
          {activeTab === 0 && (
            <Text style={styles.aboutText}>{movie?.overview}</Text>
          )}

          {/* REVIEWS */}
          {activeTab === 1 && (
            <View>
              {reviews.map((item) => (
                <View key={item.id} style={styles.reviewItem}>
                  <View style={styles.reviewImgScore}>
                    <Image
                      source={{
                        uri: item.author_details?.avatar_path
                          ? `https://image.tmdb.org/t/p/w185${item.author_details.avatar_path}`
                          : "https://i.pravatar.cc/200",
                      }}
                      style={styles.reviewAvatar}
                    />

                    {item.author_details?.rating && (
                      <Text style={styles.reviewRating}>
                        {item.author_details.rating}
                      </Text>
                    )}
                  </View>

                  <View style={styles.reviewTextContainer}>
                    <Text style={styles.reviewName}>{item.author}</Text>

                    <Text style={styles.reviewText}>{item.content}</Text>
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
                    source={{
                      uri: item.profile_path
                        ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
                        : "https://i.pravatar.cc/200",
                    }}
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
    flex: 1,
    backgroundColor: "#1f1d2b",
  },
  bannerContainer: {
    position: "relative",
  },
  banner: {
    width: "100%",
    height: 250,
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
    marginTop: 10
  },
  movieText: {
    flex: 1,
    justifyContent: "center",
    top : 35
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "600",
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    gap: 10,
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
    fontWeight: "400",
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

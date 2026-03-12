import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import SearchBox from "../../components/HomeComponents/SearchBox";
import TrendingCard from "../../components/HomeComponents/TrendingCard";
import HomeTabHeader from "../../components/HomeComponents/TabHeader";

import MovieCard, { Movie } from "../../components/HomeComponents/MovieCard";
import { fetchMovies, fetchTrendingMovies } from "../../network/service/movie/movieService";
import TabHeader from "../../components/HomeComponents/TabHeader";

export default function HomeScreen() {
  // Trending Movies
  const [trending, setTrending] = useState<Movie[]>([]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  const loadTrendingMovies = async () => {
    try {
      const data = await fetchTrendingMovies();
      setTrending(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Movies Selection
  const categories = ["now_playing", "upcoming", "top_rated", "popular"];
  const categoryLabels = ["Now Playing", "Upcoming", "Top Rated", "Popular"];
  const [activeTab, setActiveTab] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    loadMovies();
  }, [activeTab]);

  const loadMovies = async () => {
    try {
      const data = await fetchMovies(categories[activeTab]);
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={globalStyles.homeContainer} edges={["top"]}>
      <View style={styles.topSection}>
        <Text style={globalStyles.homeTitle}>What do you want to watch?</Text>
        <SearchBox placeholder="Search"></SearchBox>
      </View>

      <View style={styles.midSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 290 }}
        >
          {trending.map((movie, index) => (
            <TrendingCard
              key={movie.id}
              id={movie.id}
              number={index + 1}
              poster={movie.poster_path}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomSection}>
        <TabHeader title={categoryLabels} onTabChange={setActiveTab} />

        <FlatList
          data={movies}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topSection: {
    // borderColor: 'white', borderWidth: 1,
    paddingHorizontal: 15,
    gap: 20,
  },
  midSection: {
    // borderColor: 'white', borderWidth: 1,
    paddingTop: 10,
  },
  bottomSection: {
    // borderColor: 'white', borderWidth: 1,
    flex: 1,
  },
});

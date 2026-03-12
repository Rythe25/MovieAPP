import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../components/styles/style";
import SearchBox from "../../components/HomeComponents/SearchBox";
import TrendingCard from "../../components/HomeComponents/TrendingCard";
import { ActivityIndicator } from "react-native";

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
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    loadMovies(1);
  }, [activeTab]);

  const loadMovies = async (pageNumber = page) => {
    try {
      const data = await fetchMovies(categories[activeTab], pageNumber);

      if (pageNumber === 1) {
        setMovies(data);
      } else {
        setMovies(prev => [...prev, ...data]);
      }

      setPage(pageNumber);

    } catch (err) {
      console.log(err);
    }
  };

  const loadMoreMovies = async () => {
    if (loadingMore) return;

    setLoadingMore(true);

    try {
      const nextPage = page + 1;
      const data = await fetchMovies(categories[activeTab], nextPage);

      if (data.length > 0) {
        setMovies((prev) => [...prev, ...data]);
        setPage(nextPage);
      }

    } catch (err) {
      console.log(err);
    } finally {
      setLoadingMore(false);
    }
  };
  
return (
  <SafeAreaView style={globalStyles.homeContainer} edges={["top"]}>
    <FlatList
      ref={listRef}
      data={movies}
      numColumns={3}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}

      ListHeaderComponent={
        <>
          <View style={styles.topSection}>
            <Text style={globalStyles.homeTitle}>
              What do you want to watch?
            </Text>

            <SearchBox placeholder="Search" />
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
            <TabHeader
              title={categoryLabels}
              onTabChange={(index) => {
                setActiveTab(index);
                listRef.current?.scrollToOffset({
                  offset: 0,
                  animated: false,
                });
              }}
            />
          </View>
        </>
      }

      onEndReached={loadMoreMovies}
      onEndReachedThreshold={0.5}

      ListFooterComponent={
        loadingMore ? (
          <ActivityIndicator
            size="large"
            color="#0296e5"
            style={{ marginVertical: 20 }}
          />
        ) : null
      }
    />
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
    // flex: 1,
    marginBottom: 10
  },
  loadingText: {
    textAlign: "center",
    paddingVertical: 20,
    color: "#aaa",
  }
});

import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBox from "../../components/HomeComponents/SearchBox";
import MovieItem, {
  SearchMovie,
} from "../../components/SearchComponents/MovieItem";
import { searchMovies } from "../../network/service/movie/movieService";

import debounce from "lodash.debounce";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import RootStackParamList from "../../navigation/Auth/RootStackParamList";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<SearchMovie[]>([]);
  const [loading, setLoading] = useState(false);

  const searchMovieRequest = async (query: string) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    try {
      setLoading(true);

      const results = await searchMovies(query);

      const formatted: SearchMovie[] = results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        rating: movie.vote_average?.toFixed(1) || "0",
        genre: "Movie",
        year: movie.release_date?.split("-")[0] || "N/A",
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));

      setMovies(formatted);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useMemo(() => debounce(searchMovieRequest, 500), []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    debouncedSearch(text);
  };

  const EmptySearch = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.iconBadge}>
        <Entypo name="emoji-happy" size={26} color="#0d0d11" />
      </View>

      <Text style={styles.emptyTitle}>
        Find your movie by title,{"\n"}categories, years, etc
      </Text>
    </View>
  );

  const NoResultsView = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.iconBadge}>
        <FontAwesome5 name="sad-tear" size={26} color="#0d0d11" />
      </View>

      <Text style={styles.emptyTitle}>
        We Are Sorry, We Can{"\n"}Not Find The Movie :(
      </Text>
      <Text style={styles.emptySubtitle}>
        Find your movie by Type title,{"\n"}categories, years, etc
      </Text>
    </View>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Text style={styles.title}>Search</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBox
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Conditional Content */}
      {movies.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator = {false}
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieItem
              movie={item}
              onPress={() =>
                navigation.navigate("Detail", {
                  movieId: item.id,
                })
              }
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      ) : searchQuery.length === 0 ? (
        <EmptySearch />
      ) : (
        <NoResultsView />
      )}
    </SafeAreaView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    backgroundColor: "#1f1d2b",
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  searchContainer: {
    marginVertical: 15,
    position: "relative",
  },
  searchInput: {
    backgroundColor: "#3A3F47",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: "#FFFFFF",
    fontSize: 14,
  },
  searchIcon: {
    position: "absolute",
    right: 20,
    top: 13,
  },
  listContent: {
    paddingTop: 10,
  },
  card: {
    flexDirection: "row",
    marginBottom: 24,
  },
  poster: {
    width: 95,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#3A3F47",
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
    paddingVertical: 2,
  },
  movieTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "400",
  },
  
  // Empty State Styles
  iconBadge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#12cdd9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#d4af37",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  emptyTitle: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
  },
  emptySubtitle: {
    color: "#92929D",
    fontSize: 13,
    textAlign: "center",
    marginTop: 5,
    lineHeight: 20,
  },
});

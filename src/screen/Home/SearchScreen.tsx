import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/AuthComponents/ScreenHeader';
import globalStyles from '../../components/styles/style';
import SearchBox from '../../components/HomeComponents/SearchBox';

// --- Types ---
interface Movie {
  id: string;
  title: string;
  rating: string;
  genre: string;
  year: string;
  duration: string;
  image: string;
}

// --- Demo Data ---
const DEMO_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Spiderman',
    rating: '9.5',
    genre: 'Action',
    year: '2019',
    duration: '139 minutes',
    image: 'https://picsum.photos/200/300', 
  },
  {
    id: '2',
    title: 'Spider-Man: No Way Home',
    rating: '8.5',
    genre: 'Action',
    year: '2021',
    duration: '148 minutes',
    image: 'https://picsum.photos/200/300', 
  },
  {
    id: '3',
    title: 'The Dark Knight',
    rating: '9.0',
    genre: 'Action',
    year: '2008',
    duration: '152 minutes',
    image: 'https://picsum.photos/200/300', 
  }
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('Spiderman');

  // Filter the demo data based on input
  const filteredMovies = DEMO_MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- Sub-Components ---

  const MovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <Image source={{ uri: item.image }} style={styles.poster} />
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaRow}>
            <FontAwesome name="star" size={14} color="#FF8700" />
            <Text style={[styles.metaText, { color: '#FF8700' }]}>{item.rating}</Text>
          </View>
          <View style={styles.metaRow}>
            <FontAwesome name="ticket" size={14} color="#92929D" />
            <Text style={styles.metaText}>{item.genre}</Text>
          </View>
          <View style={styles.metaRow}>
            <FontAwesome name="calendar" size={14} color="#92929D" />
            <Text style={styles.metaText}>{item.year}</Text>
          </View>
          <View style={styles.metaRow}>
            <AntDesign name="clock-circle" size={14} color="#92929D" />
            <Text style={styles.metaText}>{item.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const NoResultsView = () => (
    <View style={styles.emptyContainer}>
      <Image 
        source={{ uri: 'https://i.ibb.co/vY8m0yM/no-results-icon.png' }} 
        style={styles.emptyImage}
        resizeMode="contain"
      />
      <Text style={styles.emptyTitle}>We Are Sorry, We Can{"\n"}Not Find The Movie :(</Text>
      <Text style={styles.emptySubtitle}>
        Find your movie by Type title,{"\n"}categories, years, etc
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Search</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBox placeholder="Search"/>
      </View>

      {/* Conditional Content */}
      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieItem item={item} />}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <NoResultsView />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      padding: 15,
      paddingBottom: 0,
      backgroundColor: '#1f1d2b',
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
    position: 'relative',
  },
  searchInput: {
    backgroundColor: '#3A3F47',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 14,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 13,
  },
  listContent: {

    paddingTop: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  poster: {
    width: 95,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#3A3F47',
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
    paddingVertical: 2,
  },
  movieTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
  metaContainer:{
    marginTop: 15
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    color: '#92929D',
    fontSize: 13,
    marginLeft: 10,
  },
  // Empty State Styles
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 26,
  },
  emptySubtitle: {
    color: '#92929D',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
});
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { 
  ChevronLeft, 
  Info, 
  Search as SearchIcon, 
  Star, 
  Ticket, 
  Calendar, 
  Clock 
} from 'lucide-react-native';

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

const { width } = Dimensions.get('window');

const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Spiderman',
    rating: '9.5',
    genre: 'Action',
    year: '2019',
    duration: '139 minutes',
    image: 'https://placehold.co/300x450/242A32/FFFFFF.png?text=Spiderman', 
  },
  {
    id: '2',
    title: 'Spider-Man: No Way H...',
    rating: '8.5',
    genre: 'Action',
    year: '2021',
    duration: '139 minutes',
    image: 'https://placehold.co/300x450/242A32/FFFFFF.png?text=No+Way+Home',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('Spiderman');
  // Change MOCK_MOVIES to [] to test the "No Result" state
  const [movies, setMovies] = useState<Movie[]>(MOCK_MOVIES);

  // --- Sub-Components ---

  const MovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.poster} />
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <View style={styles.metaRow}>
          <Star size={16} color="#FF8700" fill="#FF8700" />
          <Text style={[styles.metaText, { color: '#FF8700' }]}>{item.rating}</Text>
        </View>
        <View style={styles.metaRow}>
          <Ticket size={16} color="#92929D" />
          <Text style={styles.metaText}>{item.genre}</Text>
        </View>
        <View style={styles.metaRow}>
          <Calendar size={16} color="#92929D" />
          <Text style={styles.metaText}>{item.year}</Text>
        </View>
        <View style={styles.metaRow}>
          <Clock size={16} color="#92929D" />
          <Text style={styles.metaText}>{item.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const NoResultsView = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.illustrationWrapper}>
        {/* Replace with your local asset: require('./assets/no-result.png') */}
        <Image 
          source={{ uri: 'https://i.ibb.co/vY8m0yM/no-results-icon.png' }} 
          style={styles.emptyImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.emptyTitle}>We Are Sorry, We Can{"\n"}Not Find The Movie :(</Text>
      <Text style={styles.emptySubtitle}>
        Find your movie by Type title,{"\n"}categories, years, etc
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity><ChevronLeft color="#FFFFFF" size={28} /></TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
        <TouchableOpacity><Info color="#FFFFFF" size={24} /></TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#67686D"
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            // Example logic: if input is cleared, show empty state
            if (text === "") setMovies([]);
            else setMovies(MOCK_MOVIES);
          }}
        />
        <SearchIcon style={styles.searchIcon} color="#67686D" size={20} />
      </View>

      {/* List or Empty State */}
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieItem item={item} />}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <NoResultsView />
      )}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navTextInactive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navTextActive}>Search</Text>
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navTextInactive}>Watch list</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A32',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    marginHorizontal: 20,
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
    top: 14,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  // Movie Card Styles
  card: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  poster: {
    width: 100,
    height: 145,
    borderRadius: 16,
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  movieTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  metaText: {
    color: '#92929D',
    fontSize: 14,
    marginLeft: 10,
  },
  // Empty State Styles
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100, // Adjust to balance with bottom nav
  },
  illustrationWrapper: {
    width: 150,
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: '100%',
    height: '100%',
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 28,
  },
  emptySubtitle: {
    color: '#92929D',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },
  // Bottom Nav Styles
  bottomNav: {
    flexDirection: 'row',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#0296E5',
    backgroundColor: '#242A32',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    color: '#0296E5',
    fontSize: 12,
    fontWeight: '500',
  },
  navTextInactive: {
    color: '#67686D',
    fontSize: 12,
  },
  activeIndicator: {
    marginTop: 6,
    height: 2,
    width: 24,
    backgroundColor: '#0296E5',
    borderRadius: 2,
  }
});
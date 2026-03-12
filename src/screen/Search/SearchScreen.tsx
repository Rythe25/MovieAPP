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

// --- Demo Data ---
const DEMO_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Spiderman',
    rating: '9.5',
    genre: 'Action',
    year: '2019',
    duration: '139 minutes',
    image: 'https://images.tmdb.org/t/p/w500/r089KIn0j4uV8OitRnt3v2T587M.jpg', 
  },
  {
    id: '2',
    title: 'Spider-Man: No Way Home',
    rating: '8.5',
    genre: 'Action',
    year: '2021',
    duration: '148 minutes',
    image: 'https://images.tmdb.org/t/p/w500/1g0zzvWwsQwzQw19dmufIu9SfsZ.jpg',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    rating: '9.0',
    genre: 'Action',
    year: '2008',
    duration: '152 minutes',
    image: 'https://images.tmdb.org/t/p/w500/qJ2tW6qR7qZ1c9UnFjCq9mH0z9u.jpg',
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
        
        <View style={styles.metaRow}>
          <Star size={14} color="#FF8700" fill="#FF8700" />
          <Text style={[styles.metaText, { color: '#FF8700' }]}>{item.rating}</Text>
        </View>

        <View style={styles.metaRow}>
          <Ticket size={14} color="#92929D" />
          <Text style={styles.metaText}>{item.genre}</Text>
        </View>

        <View style={styles.metaRow}>
          <Calendar size={14} color="#92929D" />
          <Text style={styles.metaText}>{item.year}</Text>
        </View>

        <View style={styles.metaRow}>
          <Clock size={14} color="#92929D" />
          <Text style={styles.metaText}>{item.duration}</Text>
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
          onChangeText={setSearchQuery}
        />
        <SearchIcon style={styles.searchIcon} color="#67686D" size={20} />
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
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    marginHorizontal: 25,
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
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  poster: {
    width: 95,
    height: 140,
    borderRadius: 16,
    backgroundColor: '#3A3F47',
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 2,
  },
  movieTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 4,
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
  // Bottom Nav
  bottomNav: {
    flexDirection: 'row',
    height: 75,
    borderTopWidth: 1,
    borderTopColor: '#0296E5',
    backgroundColor: '#242A32',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    marginTop: 4,
    height: 2,
    width: 22,
    backgroundColor: '#0296E5',
    borderRadius: 2,
  }
});
import { FC } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export interface SearchMovie {
  id: number;
  title: string;
  rating: string;
  genre: string;
  year: string;
  image: string;
}

interface MovieItemProps {
  movie: SearchMovie;
  onPress?: () => void;
}

const MovieItem: FC<MovieItemProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      <Image source={{ uri: movie.image }} style={styles.poster} />

      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle} numberOfLines={1}>
          {movie.title}
        </Text>

        <View style={styles.metaContainer}>
          <View style={styles.metaRow}>
            <FontAwesome name="star-o" size={14} color="#FF8700"/>
            <Text style={[styles.metaText, { color: "#FF8700" }]}>
              {movie.rating}
            </Text>
          </View>

          <View style={styles.metaRow}>
            <FontAwesome name="ticket" size={14} color="#92929D" />
            <Text style={styles.metaText}>{movie.genre}</Text>
          </View>

          <View style={styles.metaRow}>
            <FontAwesome name="calendar" size={14} color="#92929D" />
            <Text style={styles.metaText}>{movie.year}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
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
  metaContainer: {
    marginTop: 10,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: 300,
    marginLeft: 10,
  },
});
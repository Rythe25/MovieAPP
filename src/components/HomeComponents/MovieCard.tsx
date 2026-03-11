import { FC } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {

  const navigation = useNavigation<any>();

  const posterURL =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  const handlePress = () => {
    navigation.navigate("Detail", {
      movieId: movie.id
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: posterURL }} style={styles.poster} />
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 20,
    alignItems: "center",
  },
  poster: {
    width: 110,
    height: 150,
    borderRadius: 12,
  },
});
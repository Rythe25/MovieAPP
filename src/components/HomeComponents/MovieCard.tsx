import { FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {

  const posterURL =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <View style={styles.card}>
      <Image source={{ uri: posterURL }} style={styles.poster} />
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card:{
    flex:1,
    marginBottom:20,
    alignItems:"center"
  },
  poster:{
    width:110,
    height:150,
    borderRadius:12
  }
});
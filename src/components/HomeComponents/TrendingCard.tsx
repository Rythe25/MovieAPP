import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

interface TrendingCardProps {
  id: number;
  number: number;
  poster: string;
}

const TrendingCard: FC<TrendingCardProps> = ({ id, number, poster }) => {

  const navigation = useNavigation<any>();

  const posterURL =
    "https://image.tmdb.org/t/p/w500" + poster;

  const handlePress = () => {
    navigation.navigate("Detail", {
      movieId: id
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image style={styles.movieCard} source={{ uri: posterURL }} />

      <Text style={styles.trendingNumber}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  movieCard:{
    width: 150,
    height: 210,
    borderRadius: 15
  },
  trendingNumber:{
    // borderColor: 'white', borderWidth: 1,
    fontSize: 120,
    position: 'relative',
    top: -110,
    left: -20,
    color: '#373c44',

    textShadowColor:'#0296e5',
    textShadowOffset:{ width:1, height:1 },
    textShadowRadius:1
  }
});

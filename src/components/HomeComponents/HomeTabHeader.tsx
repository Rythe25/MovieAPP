import { FC, useState } from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

interface HomeTabHeaderProps {
   title?: string[];
   onTabChange:(index:number)=>void;
}

const HomeTabHeader: FC<HomeTabHeaderProps> = ({ title = [], onTabChange }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {title.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setActiveIndex(index);
            onTabChange(index);
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeIndex === index && styles.activeTab
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeTabHeader;

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    gap:25,
    paddingHorizontal:20
  },
  tabText:{
    color:"#ffffff9d",
    fontSize:16
  },
  activeTab:{
    color: 'white',
    borderBottomWidth: 4,
    borderBottomColor: "#868692",
    paddingBottom: 4,
  }
});
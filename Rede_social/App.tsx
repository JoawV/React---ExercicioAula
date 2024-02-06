import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Feed from './src/screen/Feed';

const data = [
  {
    id: "1",
    avatar: "https://avatars.githubusercontent.com/u/112258047?s=400&v=4",
    username: "Fulano",
    text: "Conteúdo 1",
    Image: "https://source.unsplash.com/random",
    comments: 100,
    reposts: 200,
    likes: 300,
  },
  {
    id: "2",
    avatar: "https://avatars.githubusercontent.com/u/112258047?s=400&v=4",
    username: "Ciclano",
    text: "Conteúdo 2",
    Image: "https://source.unsplash.com/random",
    comments: 50,
    reposts: 100,
    likes: 150,
  },
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Feed 
              avatar={item.avatar}
              username={item.username}
              text={item.text}
              image={item.Image}
              comments={item.comments}
              reposts={item.reposts}
              likes={item.likes}
            />
          )}
          keyExtractor={(item) => item.id}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
      borderRadius: 5,
      margin: 5,
      width: "95%",
      padding: 20,
      shadowColor: "#fff",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 5,
  }
})
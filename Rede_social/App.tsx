import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Feed from './src/screen/Feed';

const data = [
  {
    id: "1",
    avatar: "fulano",
    username: "https://avatars.githubusercontent.com/u/112258047?s=400&v=4",
  },
  {
    id: "2",
    avatar: "ciclano",
    username: "https://avatars.githubusercontent.com/u/112258047?s=400&v=4",
  },
];

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Header avatar={item.avatar} username={item.username} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

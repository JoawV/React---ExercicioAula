import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Header from "../components/Header";
import { FC } from "react";

const Feed = FC<Props> = ({
    avatar,
    username,
    text,
    image,
    comments,
    reposts,
    likes,
}) => {
    return (
        <View style={styles.container}>
            <Header avatar={avatar} username={username} />
        </View>
    )
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

export default Feed;
import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    comments: number;
    reposts: number;
    likes: number;
}

const Social: FC<Props> = ({ comments, reposts, likes }) => {
    return (
        <View style={styles.container}>
            <View style={styles.socialItem}>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Text style={styles.text}>{comments}</Text>
            </View>
            <View style={styles.socialItem}>
                <Ionicons name="repeat-outline" size={24} color="black" />
                <Text style={styles.text}>{reposts}</Text>
            </View>
            <View style={styles.socialItem}>
                <Ionicons name="heart-outline" size={24} color="black" />
                <Text style={styles.text}>{likes}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    socialItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 65,
        paddingRight: 65,
    },
    text: {
        marginLeft: 5,
        fontSize: 16,
    },
});

export default Social;
import { FC } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
    text: string;
    image: string;
}

const Body: FC<Props> = ({ text, image }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Image style={styles.image} source={{ uri: image }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: 500,
        height: 400,
        resizeMode: "cover",
        marginBottom: 10,
        borderRadius: 10,
    },
  })

export default Body;
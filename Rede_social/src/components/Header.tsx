import { FC } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
    avatar: string;
    username: string;
}

const Header: FC<Props> = ({ avatar, username }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
                <Text style={styles.username}>{username}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default Header;
import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
    avatar: string;
    username: string;
}

const Header: FC<Props> = ({ avatar, username }) => {
    return (
        <View>
            <Text style={styles.text}>{avatar}</Text>
            <Text style={styles.bodyText}>{username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
    bodyText: {
        fontSize: 20,
    },
    container: {
        marginVertical: 10,
    },
});

export default Header;
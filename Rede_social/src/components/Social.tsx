import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
    comments: number;
    reposts: number;
    likes: number;
}

const Social: FC<Props> = ({ comments, reposts, likes }) => {
    return (
        <View>
            <Text>{comments}</Text>
            <Text>{reposts}</Text>
            <Text>{likes}</Text>
        </View>
    );
};

export default Social;
import { View, Text, Image, StyleSheet } from "react-native";
import { LeafActiveSvg, LeafInactiveSvg, ShareSvg, CommentSvg } from "./SvgIcons";
import { baseURL } from "../services/API";

const styles = StyleSheet.create({
    postContainer: {
        width: "100%",
        paddingHorizontal: 28,
        paddingTop: 40,
    },
    postUserName: {
        fontSize: 20,
        fontFamily: "HelveticaBold",
        color: "#000000",
        lineHeight: 20,
    },
    postTimestamp: {
        fontSize: 14,
        fontFamily: "Helvetica",
        color: "#A3A3A3",
        lineHeight: 14,
    },
    postImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 3 / 2,
        marginTop: 5,
        borderRadius: 10,
    },
    postFeedbackRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
    },
    postInteractions: {
        flexDirection: "row",
    },
    postFeedbackCount: {
        fontSize: 18,
        fontFamily: "Helvetica",
        color: "#000",
        lineHeight: 18,
    },
    marginHorizontal8: { marginHorizontal: 8 },
});

interface PostInformation {
    user: string;
    created_at: any;
    image: any;
    [index: string]: any;
}

export function Post({ data }: { data: PostInformation }) {
    const { user, created_at, image } = data;

    const postData = {
        name: data.user,
        time: data.created_at,
        image: data.image,
        leaves: 673,
        comments: 23,
        liked: true,
    };

    const timeDifference = new Date().getTime() - new Date(postData.time).getTime();
    const minutesElapsed = Math.floor(timeDifference / (1000 * 60));
    const formattedTime = minutesElapsed === 0 ? "przed chwilą" : `${minutesElapsed} minut temu`;

	function LeafButton() {
		return postData.liked ? (
			<LeafActiveSvg style={styles.marginHorizontal8} />
		) : (
			<LeafInactiveSvg style={styles.marginHorizontal8} />
		)
	}


    return (
        <View style={styles.postContainer}>
            <Text style={styles.postUserName}>{postData.name}</Text>
            <Text style={styles.postTimestamp}>{formattedTime}</Text>
            <Image style={styles.postImage} source={{ uri: baseURL + postData.image }}></Image>
            <View style={styles.postFeedbackRow}>
                <View style={styles.postInteractions}>
                    <Text style={styles.postFeedbackCount}>{postData.leaves}</Text>
                    <LeafButton />
                    <Text style={styles.postFeedbackCount}>{postData.comments}</Text>
                    <CommentSvg style={styles.marginHorizontal8} />
                </View>
                <ShareSvg />
            </View>
        </View>
    );
}

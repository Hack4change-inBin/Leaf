import { View, Text, Image } from "react-native";
import {
	LeafActiveSvg,
	LeafInactiveSvg,
	ShareSvg,
	CommentSvg,
} from "../SvgIcons";

export function Post({ item }) {
	const data = {
		name: item.user,
		time: item.created_at,
		image: require("../../assets/images/example-post.png"),
		leaves: 673,
		comments: 23,
		liked: true,
	};
	const parsedDatetime = new Date(data.time);

	// Get the current time
	const currentTime = new Date();

	// Calculate the time difference in milliseconds
	const timeDiff = currentTime.getTime() - parsedDatetime.getTime();

	// Calculate the time difference in minutes
	const minutesAgo = Math.floor(timeDiff / (1000 * 60));

	// Format the result
	const formattedTime =
		minutesAgo === 0 ? "przed chwilą" : `${minutesAgo} minut temu`;

	return (
		<View style={{ width: "100%", paddingHorizontal: 28, paddingTop: 40 }}>
			<Text
				style={{
					fontSize: 20,
					fontFamily: "HelveticaBold",
					color: "#000000",
					lineHeight: 20,
				}}
			>
				{data.name}
			</Text>
			<Text
				style={{
					fontSize: 14,
					fontFamily: "Helvetica",
					color: "#A3A3A3",
					lineHeight: 14,
				}}
			>
				{formattedTime}
			</Text>
			<Image
				style={{
					height: undefined,
					width: "100%",
					aspectRatio: 3 / 2,
					marginTop: 5,
					borderRadius: 10,
				}}
				source={data.image}
			></Image>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: 16,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Text
						style={{
							fontSize: 18,
							fontFamily: "Helvetica",
							color: "#000",
							lineHeight: 18,
						}}
					>
						{data.leaves}
					</Text>
					{data.liked ? (
						<LeafActiveSvg style={{ marginHorizontal: 8 }} />
					) : (
						<LeafInactiveSvg style={{ marginHorizontal: 8 }} />
					)}
					<Text
						style={{
							fontSize: 18,
							fontFamily: "Helvetica",
							color: "#000",
							lineHeight: 18,
						}}
					>
						{data.comments}
					</Text>
					<CommentSvg style={{ marginHorizontal: 8 }} />
				</View>
				<ShareSvg />
			</View>
		</View>
	);
}

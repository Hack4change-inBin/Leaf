import { useState } from "react";
import {
	View,
	SafeAreaView,
	Platform,
	StatusBar,
	Text,
	TextInput,
	Pressable,
} from "react-native";
import { HeaderBackArrow } from "../components/Header";
import { ShareSvg } from "../components/SvgIcons";
import * as ImagePicker from "expo-image-picker";
import API from "../services/API";

export default function AddView({ route, navigation }) {
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	async function uploadPost() {
		console.log(title);
		// console.log(description);
		const formData = new FormData();
		formData.append("image", {
			name: "test.jpg",
			type: image.type,
			uri: image.uri,
		});
		formData.append("title", title);
		formData.append("description", description);
		formData.append("category", 1);
		formData.append("point_x", 42.23);
		formData.append("point_y", 21.22);
		const { data } = await API.post("posts/", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		console.log(data);
	}

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result);
		}
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#fff",

				paddingTop:
					Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}
		>
			<HeaderBackArrow
				title="Add new post"
				onPress={() => navigation.goBack()}
			/>
			<View style={{ paddingHorizontal: 28 }}>
				<Text
					style={{
						fontSize: 18,
						fontFamily: "Helvetica",
						color: "#000000",
					}}
				>
					Tytuł
				</Text>
				<TextInput
					style={{
						borderWidth: 1,
						padding: 10,
						borderColor: "#979797",
						borderRadius: 8,
						fontSize: 18,
					}}
					placeholder="Tytuł"
					value={title}
					onChangeText={setTitle}
				></TextInput>

				<Text
					style={{
						fontSize: 18,
						fontFamily: "Helvetica",
						color: "#000000",
						marginTop: 10,
					}}
				>
					Opis
				</Text>
				<TextInput
					style={{
						borderWidth: 1,
						padding: 10,
						borderColor: "#979797",
						borderRadius: 8,
						fontSize: 18,
						textAlignVertical: "top",
						minHeight: 100,
					}}
					placeholder="Opis"
					multiline={true}
					numberOfLines={3}
					value={description}
					onChangeText={setDescription}
				></TextInput>

				{image ? (
					<Pressable
						style={{
							backgroundColor: "#EFF3EF",
							height: 80,
							borderWidth: 1,
							borderColor: "#588157",
							marginTop: 20,
							borderRadius: 8,
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
						}}
						onPress={pickImage}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: "Helvetica",
								color: "#588157",
								marginLeft: 8,
							}}
						>
							Photo uploaded
						</Text>
					</Pressable>
				) : (
					<Pressable
						style={{
							height: 80,
							borderWidth: 1,
							borderColor: "#979797",
							marginTop: 20,
							borderRadius: 8,
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
						}}
						onPress={pickImage}
					>
						<ShareSvg stroke="#979797" />
						<Text
							style={{
								fontSize: 18,
								fontFamily: "Helvetica",
								color: "#979797",
								marginLeft: 8,
							}}
						>
							Upload a photo
						</Text>
					</Pressable>
				)}
			</View>

			<Pressable
				style={{
					height: 50,
					width: "100%",
					borderRadius: 8,
					backgroundColor: "#60A155",
					justifyContent: "center",
					alignItems: "center",
					marginBottom: 150,
					marginVertical: 28,
				}}
				onPress={async () => {
					uploadPost();
				}}
			>
				<Text style={{ color: "#FFFFFF", fontFamily: "Helvetica" }}>
					Wyślij
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}

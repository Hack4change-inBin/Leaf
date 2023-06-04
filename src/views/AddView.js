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
import { ShareSvg } from "../SvgIcons";
import * as ImagePicker from "expo-image-picker";

export default function AddView({ route, navigation }) {
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

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
			setImage(result.assets[0].uri);
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
					onChange={setTitle}
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
					onChange={setDescription}
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
		</SafeAreaView>
	);
}

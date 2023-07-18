import { ShareSvg } from "@/components/common/SvgIcons";
import * as ImagePicker from "expo-image-picker";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ImagePickerInput({ image, setImage }) {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result);
        }
    };

    return image ? (
        <Pressable
            style={[stylesImagePicker.imagePickerContainer, { backgroundColor: "#EFF3EF", borderColor: "#588157" }]}
            onPress={pickImage}
        >
            <Text style={[stylesImagePicker.imagePickerText, { color: "#588157" }]}>Photo uploaded</Text>
        </Pressable>
    ) : (
        <Pressable style={[stylesImagePicker.imagePickerContainer, { borderColor: "#979797" }]} onPress={pickImage}>
            <ShareSvg stroke="#979797" />
            <Text style={[stylesImagePicker.imagePickerText, { color: "#979797" }]}>Upload a photo</Text>
        </Pressable>
    );
}
export const stylesImagePicker = StyleSheet.create({
    imagePickerContainer: {
        height: 80,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    imagePickerText: {
        fontSize: 18,
        fontFamily: "Helvetica",
        marginLeft: 8,
    },
});


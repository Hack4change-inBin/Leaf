import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { HeaderBackArrow } from "@/components/Header";
import ImagePickerInput from "@/components/common/ImagePickerInput";
import Wrapper from "@/components/common/Wrapper";
import useKeyboardStatus from "@/hooks/useKeyboardStatus";
import API from "@/services/API";

export default function AddView({ route, navigation }) {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {keyboardStatus} = useKeyboardStatus();

    async function uploadPost() {
        console.log(title);
        console.log(description);
        const formData = new FormData();
        formData.append("image", {
            name: "test.jpg",
            type: image.type,
            uri: image.uri,
        } as unknown as Blob);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", "1");
        formData.append("point_x", "42.23");
        formData.append("point_y", "21.22");
        const { data } = await API.post("posts/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(data);
    }

    return (
        <Wrapper>
            <HeaderBackArrow title="Add new post" onPress={() => navigation.goBack()} />
            <View style={{ flex: 1, paddingHorizontal: 28 }}>
                <Text style={stylesAddView.formText}>Tytuł</Text>
                <TextInput style={stylesAddView.formTextInput} placeholder="Tytuł" value={title} onChangeText={setTitle} />

                <Text style={stylesAddView.formTextDescription}>Opis</Text>
                <TextInput
                    style={stylesAddView.formTextInputDescription}
                    placeholder="Opis"
                    multiline={true}
                    numberOfLines={3}
                    value={description}
                    onChangeText={setDescription}
                />

                <ImagePickerInput image={image} setImage={setImage} />

                <Pressable style={stylesAddView.formSubmitButton} onPress={async () => uploadPost()}>
                    <Text style={{ color: "#FFFFFF", fontFamily: "Helvetica" }}>Wyślij{keyboardStatus}</Text>
                </Pressable>
            </View>
        </Wrapper>
    );
}

const stylesAddView = StyleSheet.create({
    formTextInputDescription: {
        borderWidth: 1,
        padding: 10,
        borderColor: "#979797",
        borderRadius: 8,
        fontSize: 18,
        textAlignVertical: "top",
        minHeight: 100,
    },
    formTextDescription: {
        fontSize: 18,
        fontFamily: "Helvetica",
        color: "#000000",
        marginTop: 10,
    },
    formTextInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: "#979797",
        borderRadius: 8,
        fontSize: 18,
    },
    formText: {
        fontSize: 18,
        fontFamily: "Helvetica",
        color: "#000000",
    },
    formSubmitButton: {
        height: 50,
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#60A155",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 150,
        marginVertical: 28,
    },
});

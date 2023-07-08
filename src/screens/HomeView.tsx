import { useState, useEffect, useRef } from "react";
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    StatusBar,
    RefreshControl,
    Button,
    View,
    Text,
    TouchableOpacity,
    Platform,
} from "react-native";
import { FilterSvg } from "@/components/common/SvgIcons";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import API from "@/services/API";

import { Post } from "@/components/Post";
import Wrapper from "@/components/common/Wrapper";
import { FilterModal } from "@/components/FilterModal";

const styles = StyleSheet.create({
    filterContainer: {
        width: "100%",
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 28,
        paddingVertical: 24,
    },
    filterButton: {
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 14,
        paddingVertical: 2,
        marginRight: 8,
    },
    filterButtonText: {
        fontSize: 16,
        fontFamily: "Helvetica",
        color: "#000",
    },
});

export default function HomeView() {
    const [posts, setPosts] = useState([]);
    const [isVisible, setVisible] = useState(false);
    const isRefreshing = useRef(false);

    async function fetchPosts() {
        const { data } = await API.get("posts/");
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    async function onRefresh() {
        isRefreshing.current = true;
        await fetchPosts();
        isRefreshing.current = false;
    }

    return (
        <Wrapper>
            <FilterModal isVisible={isVisible} setVisible={setVisible} />
            <Header />
            <View style={styles.filterContainer}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => setVisible(true)}>
                        <Text style={styles.filterButtonText}>
                            <FilterSvg />
                            Filtruj
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={posts}
                renderItem={({ item }) => <Post data={item} />}
                style={{ width: "100%" }}
                refreshControl={<RefreshControl refreshing={isRefreshing.current} onRefresh={onRefresh} />}
            />
        </Wrapper>
    );
}

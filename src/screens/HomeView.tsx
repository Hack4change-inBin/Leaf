import { useState } from 'react';
import {
    FlatList,
    RefreshControl,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';

import { FilterSvg } from '@/components/common/SvgIcons';
import Wrapper from '@/components/common/Wrapper';
import { FilterModal } from '@/components/FilterModal';
import Header from '@/components/Header';
import { Post } from '@/components/Post';
import useFetchPosts from '@/hooks/useFetchPosts';

const stylesBase = StyleSheet.create({
    flexRow: {
        flexDirection: "row"
    }
})

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
    const { posts, refreshing, onRefresh } = useFetchPosts();
    const [visible, setVisible] = useState(false);

    return (
        <Wrapper>
            <FilterModal visible={visible} setVisible={setVisible} />

            <Header />
            
            <View style={styles.filterContainer}>
                <View style={stylesBase.flexRow}>
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
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </Wrapper>
    );
}

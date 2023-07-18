import { useEffect, useState } from 'react';

import API from '@/services/API';

export default function useFetchPosts() {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    async function fetchPosts() {
        try {
            const { data } = await API.get("posts/")
            setPosts(data);
        } catch(error) {
            console.error(error)
            setPosts([])
        }
        setRefreshing(false)
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    async function onRefresh() {
        setRefreshing(true);
        fetchPosts();
    }

    return { posts, refreshing, onRefresh };
}

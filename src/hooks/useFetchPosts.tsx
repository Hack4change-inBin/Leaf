import { useEffect, useRef, useState } from 'react';

import API from '@/services/API';

export default function useFetchPosts() {
    const [posts, setPosts] = useState([]);
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

    return { posts, setPosts, isRefreshing: isRefreshing.current, onRefresh };
}

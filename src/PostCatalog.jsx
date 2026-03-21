import React, { useState, useEffect } from 'react';

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul className="posts-list">
            {posts.map((post) => (
                <li key={post.id}>
                    <div className="post-content">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PostCatalog;
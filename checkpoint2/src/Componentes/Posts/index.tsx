import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}
const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Erro ao buscar posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-red-100 p-4">
      <h1 className="text-4xl font-bold mb-4">1- Lista de Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-4 rounded-lg border-2 border-black p-4">
            <h2 className="text-lg font-bold mb-2 text-center">{post.title}</h2>
            <p className="text-base text-center">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;

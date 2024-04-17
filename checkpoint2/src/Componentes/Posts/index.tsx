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
}};

fetchPosts();
}, []);

return (
  <div className="bg-red-100 p-4"> {/* Fundo vermelho claro */}
    <h1 className="text-2xl font-bold mb-4">1- Lista de Posts</h1> {/* Maior tamanho de texto e negrito */}
    <ul>
      {posts.map((post, index) => (
        <li key={index} className="mb-4"> {/* Adiciona margem inferior para separar os posts */}
          <h2 className="text-lg font-bold">{post.title}</h2> {/* Negrito */}
          <p className="text-base">{post.body}</p> {/* Tamanho de texto menor */}
        </li>
))};
    </ul>
  </div>
);};
export default Posts;

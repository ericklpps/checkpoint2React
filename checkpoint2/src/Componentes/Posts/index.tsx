//Realizando os imports
import React, {useState, useEffect} from "react";

//Definindo Post e suas funções para representar os objetos
interface Post {
    id: number;
    titles: string;
    body: string;
   }
   

//definimos posts e setPosts para definir o []
//e atualizar (set) de acordo com boas práticas
//realizamos a requisição para o consumo da API
   const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(data => setPosts(data));
    }, []);
   
    return (
       <div>
         <h1>1- Lista Posts</h1>
         <ul>
        {/*Definimos os posts e mapeamos, 
        pegamos o objeto post e sua função, no caso id, titulos e body */}
           {posts.map(post => (
             <li key={post.id}>
               <h2>{post.titles}</h2>
               <p>{post.body}</p>
             </li>
           ))}
         </ul>
       </div>
    );
   };
   
   export default Posts;
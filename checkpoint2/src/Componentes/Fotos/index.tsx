import React, { useState, useEffect } from 'react';

const Fotos: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);

useEffect(() => {
  const fetchPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Erro ao buscar fotos');
      }
      const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Erro ao buscar fotos:', error);
}
};

fetchPhotos();
}, []);

  {/*Criando um return que traz um título e um hashmap que retorna as fotos e da um índice a elas */}
return (
  <div className="bg-red-100 p-4"> 
    <h1 className="text-3xl font-bold mb-4">3- Galeria de Fotos</h1>
    <div className="grid grid-cols-2 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="border border-black rounded-md p-4">
          <h2 className="text-lg font-bold mb-2">{photo.title}</h2>
          <img src={photo.thumbnailUrl} alt={photo.title} className="w-full" />
        </div>
))};
    </div>
  </div>
);};
export default Fotos;

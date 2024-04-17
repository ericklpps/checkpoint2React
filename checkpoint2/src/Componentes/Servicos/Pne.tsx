import React from 'react';
import ImgChoro from '../../assets/fotochorando.png';

//Se digitar uma url inexistente, retorna este componente
const NaoEncontrado: React.FC = () => {
  return (
    <div className="bg-red-100 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">PÁGINA NÃO ENCONTRADA</h1>
      <img src={ImgChoro} alt='Imagem choro' className="w-32 h-32 mb-4"/>
      <p className="text-lg">Caso persista, entre em contato com o suporte</p>
    </div>
);};
export default NaoEncontrado;

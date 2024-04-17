import React, { useEffect, useState } from 'react';


//interface post para definir o que será exibido da api e os tipos que receberão
//Nesse caso, criei duas diferentes pois o address é composto por mais informações
interface Address {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
}

interface Usuario {
  name: String;
  email: String;
  address: Address;
}

//Try catch para consultar a api, e caso de erro, exibir o mesmo
const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    useEffect(() => {
      const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            const data = await response.json();
            setUsuarios(data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
}};
fetchUsuarios();
}, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">2- Lista de Usuários</h1>
        <div className="rounded-md overflow-hidden border border-black">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black px-4 py-2">Nome do usuário</th>
                <th className="border border-black px-4 py-2">Email</th>
                <th className="border border-black px-4 py-2">Endereço</th>
                <th className="border border-black px-4 py-2">Suíte/Ap</th>
                <th className="border border-black px-4 py-2">Cidade</th>
                <th className="border border-black px-4 py-2">CEP</th>
              </tr>
            </thead>
              <tbody>
                {/*Criando um return que traz um título e um hashmap que retorna os usuarios e da um índice a eles */}
                {usuarios.map((usuario, index) => (
                  <tr key={index}>
                    <td className="border border-black px-4 py-2">{usuario.name}</td>
                    <td className="border border-black px-4 py-2">{usuario.email}</td>
                    <td className="border border-black px-4 py-2">{usuario.address.street}</td>
                    <td className="border border-black px-4 py-2">{usuario.address.suite}</td>
                    <td className="border border-black px-4 py-2">{usuario.address.city}</td>
                    <td className="border border-black px-4 py-2">{usuario.address.zipcode}</td>
                  </tr>
))}   
              </tbody>
        </table>
      </div>
    </div>
);};
export default Usuarios;

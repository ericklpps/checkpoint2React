import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Usuarios from './Componentes/Usuarios';
import Fotos from './Componentes/Fotos';
import NaoEncontrado from './Componentes/Servicos/Pne';
import Posts from './Componentes/Posts';
import Inicio from './inicio';
import './index.css';
//importando o que utilizaremos

function App() {
    return (
        <Router>
            <div className='bg-red-100 p-4'>
                <header className="text-center font-bold text-lg text-gray-800 mb-4 rounded-lg bg-gray-300 p-4">
                    <h1>Checkpoint 2: Responsive Web Development</h1>
                </header>
                <nav className="flex border-b border-black mb-4 bg-gray-300">
                    <ul className="flex">
                        <li className="mr-4"><Link to='/'>PÁGINA INICIAL</Link></li> {/*Linkando os componentes */}
                        <li className="mr-4"><Link to='/Posts'>POSTS</Link></li>
                        <li className="mr-4"><Link to='/Usuarios'>USUÁRIOS</Link></li>
                        <li className="mr-4"><Link to='/Fotos'>FOTOS</Link></li>
                        <li><a href='#final'>FINAL</a></li>
                    </ul>
                </nav>
                <Routes> {/*Definindo as rotas e seus elementos com as váriaveis do return para serem exibidas */}
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/Posts' element={<Posts/>}/>
                    <Route path='/Usuarios' element={<Usuarios/>}/>
                    <Route path='/Fotos' element={<Fotos/>}/>
                    <Route path="*" element={<NaoEncontrado/>}/>
                </Routes>
                <hr className="my-4 border-gray-600" />
                <div id='final' className="text-center bg-gray-300 p-4">
                    <footer className="text-center font-bold text-lg text-gray-800 rounded-lg bg-gray-300 p-4">
                        <p className="mb-2">&#169; Todos os direitos reservados</p>
                        <p>Erick Lopes Silva RM - 553927</p>
                        <p>https://github.com/ericklpps/checkpoint2React</p>
                    </footer>
                </div>
            </div>
        </Router>
);};
export default App;

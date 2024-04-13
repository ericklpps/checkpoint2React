import React, { useState } from 'react'
import Post from './Componentes/Posts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return(
            <div className='App'>
            <Post/>
        </div>

        
    );
};

export default App;

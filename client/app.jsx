import React from 'react'
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';

function App() {
    return (
        <div className="min-h-screen bg-main-blue">
            <Nav />
            <main className="flex flex-col justify-center items-center min-h-full text-offwhite font-montserrat bg-main-blue">
                <Outlet />
            </main>
        </div>
    );
}

export default App;


import React from 'react'
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';

function App() {
    return (
        <div className="h-screen">
            <Nav/>
            <main className="flex flex-col flex-grow items-center min-h-full text-offwhite font-montserrat bg-main-blue">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
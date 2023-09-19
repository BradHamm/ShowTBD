import React from 'react'
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';

function App() {
    return (
        <div className="min-h-screen">
            <Nav/>
            <main className="flex flex-col justify-center items-center min-h-full bg-main-blue text-offwhite font-montserrat">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
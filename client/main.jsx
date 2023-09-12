import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileConfig from './pages/ProfileConfig';
import ReviewForm from './pages/ReviewForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/Profile',
                element: <Profile />,
            },
            {
                path: '/ProfileConfig',
                element: <ProfileConfig />,
            },
            {
                path: '/ReviewForm',
                element: <ReviewForm />,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

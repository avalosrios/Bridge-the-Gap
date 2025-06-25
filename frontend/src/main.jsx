import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import GroupPage from './pages/GroupPage.jsx'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/group/:id',
        element: <GroupPage />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)

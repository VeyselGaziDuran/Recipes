import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Details from './pages/details/Details'
import Create from './pages/create/Create'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/search', element: <Search /> },
  { path: '/details/:id', element: <Details /> },
  { path: '/create', element: <Create /> },
]);

function App() {


  return (
    <div>
      < RouterProvider router={routes} />
    </div>
  )
}

export default App

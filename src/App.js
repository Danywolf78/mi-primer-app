import React from 'react';
import './App.css';
import PaginaSuperHeroes from './components/paginas/PaginaSuperHeroes';
import {
  createBrowserRouter,
  RouterProvider} from 'react-router-dom';
import PaginaBuscador from './components/paginas/PaginaBuscador';
import PaginaDetalle from './components/paginas/PaginaDetalle';
const router = createBrowserRouter([
  {
    path: "/superheroes",
    element: <PaginaSuperHeroes/>,
  },
  {
    path: "/productos",
    element: <div>Productos </div>,
  },
  {
    path: "/",
    element: <div> Productos </div>,
    errorElement: <div> 404 </div>,
  },
  {
    path: "peliculas",
    element: <PaginaBuscador/>,
    
  },
  {
    path: "peliculas/:id",
    element: <PaginaDetalle/>,
    
  }
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

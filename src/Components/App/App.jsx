import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import './App.css';
import { Children } from 'react';
import Home from '../Home/Home';
import Notfound from '../Notfound/Notfound';
import About from '../About/About';
import Movies from '../Movies/Movies';
import Tvshows from '../Tvshows/Tvshows';
import Register from '../Register/Register';
import Login from '../Login/Login';
import People from '../People/People';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <MasterLayout />, errorElement: <Notfound />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "movies", element: <Movies /> },
        { path: "tvshows", element: <Tvshows /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "people", element: <People /> },
        // {path: "*" , element: <h2> error</h2>}
      ]
    }
  ])



  return (
    <>

      <RouterProvider router={routes} />

    </>
  );
}

export default App;

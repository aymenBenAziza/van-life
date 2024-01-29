import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Host from './pages/host/Host';
import Vans from './pages/vans/Vans';
import VanDetails from './pages/vanDetails/vanDetail';
import './server'



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route index element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='host' element = {<Host />} />
      <Route path='vans' element = {<Vans />} />
      <Route path='vans/:id' element={<VanDetails />} />
    </Route>
  ))

  return (

    <RouterProvider router={router} />

  );
}

export default App;

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/vans/Vans';
import VanDetail, { loader, loader as vanDetailLoader } from './pages/vans/VanDetail';
import HostLayout from './components/HostLayout';
import Error from './components/Error';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews, {loader as loaderReviews, action as actionReviews} from './pages/host/Reviews';
import HostVan, { loader as hostVanLoader } from './pages/host/HostVan';
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/host/HostVanDetail';
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing';
import NotFound from './pages/NotFound';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login';
import { requireAuth } from './utils';
import { Profile } from './pages/Profile';
import Signup ,{action as signupAction} from './pages/Signup';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route path="signup" element={<Signup />} action={signupAction} />
      <Route path="profile" element={<Profile />} />
      <Route path='host' element={<HostLayout />} loader={async ({request}) => await requireAuth(request)}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="Vans" errorElement={<Error />} loader={hostVanLoader} element={<HostVan />} />
        <Route path="Vans/:id" loader={hostVanDetailLoader} element={<HostVanDetail />} errorElement={<Error />}>
          <Route index element={<HostVanInfo />} />
          <Route path="photos" element={<HostVanPhotos />} />
          <Route path="pricing" element={<HostVanPricing />} />
        </Route>
        <Route path="reviews" loader={loaderReviews} action={actionReviews} element={<Reviews />} />
      </Route>
      <Route path='vans' loader={vansLoader} element={<Vans />} errorElement={<Error />} />
      <Route path='vans/:id' loader={vanDetailLoader} element={<VanDetail />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;

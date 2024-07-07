import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Player from './pages/Player';
import ProtectedRoute from './utilities/ProtectedRoute';
import MovieNotFound from './pages/error/MovieNotFound';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <MovieNotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: '/player/:id',
          element: (
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: '/login',
      element: (
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div>
      <ToastContainer theme='dark' autoClose={1500}/>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

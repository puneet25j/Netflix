import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../utilities/firebase';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate('/');
      } else {
        navigate('/login');
      }
    });
  }, []);

  return (<>{children}</>);
};

export default ProtectedRoute;

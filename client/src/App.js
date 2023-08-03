import NavBar from './components/NavBar/NavBar';
import { Detail, Form, Home, Landing, About } from './views';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from './components/Private/PrivateRoute';


function App() {
  const location = useLocation();

  return (

    <Auth0Provider
      domain="dev-xehpsahelqjudav0.us.auth0.com"
      clientId="zzCbQZaV49AKdMv3F47yuGW8HKoQXqjM"
      redirectUri="http://localhost:3000/home"
    >
      <div>

        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>

        <Routes>
          <PrivateRoute path='/home' element={<Home />} />
        </Routes>

        <Routes>
          <PrivateRoute path='/detail/:id' element={<Detail />} />
        </Routes>

        <Routes>
          <PrivateRoute path='/form' element={<Form />} />
        </Routes>

        <Routes>
          <PrivateRoute path='/about' element={<About />} />
        </Routes>

      </div>
    </Auth0Provider>
  );
}

export default App;

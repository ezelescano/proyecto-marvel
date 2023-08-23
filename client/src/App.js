import NavBar from './components/NavBar/NavBar';
import { Detail, CreateForm, Home, Landing, About } from './views';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import style from './components/MarvelHeroContainer/MarvelHeroConteiner.module.css'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001'


function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();


  console.log("soy isAuth0", isAuthenticated);
  return (

    <Auth0Provider
      domain="dev-xehpsahelqjudav0.us.auth0.com"
      clientId="zzCbQZaV49AKdMv3F47yuGW8HKoQXqjM"
      authorizationParams={{ redirect_uri: 'https://proyecto-marvel-six.vercel.app/home' }}
    >
      <body className={style.bodyfondo}>
        <div>

          {location.pathname !== "/" && <NavBar />}

          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>

          <Routes>

            <Route path='/home' element={<Home />} />
            {console.log("soy el isAuth del route", isAuthenticated)}
          </Routes>

          <Routes>
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>

          <Routes>
            <Route path='/form' element={<CreateForm />} />
          </Routes>

          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>

        </div>
      </body>
    </Auth0Provider>
  );
}

export default App;

import { useAuth0 } from "@auth0/auth0-react";
// import bootstrap from 'bootstrap';
// import Button from 'react-bootstrap';
import style from '../Landing/Landing.module.css'
const Landing = () => {

    const { loginWithRedirect } = useAuth0();

    return (

        <div  className={style.landingContainer }>
            <div>
                <img className={`${style.backgroundImage} ${style.kenburnsEffect}`} src="/assets/fondo.jpg" />
            </div>
            
        <div className={style.content}>

                <button className={style.shake} onClick={() => loginWithRedirect()}>Ingresar</button>
        
        </div>

        

        </div>
    )
}

export default Landing;     
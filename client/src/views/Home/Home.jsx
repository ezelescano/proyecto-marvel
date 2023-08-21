import MarvelHeroConteiner from "../../components/MarvelHeroContainer/MarvelHeroConteiner";
import React, { useState, useEffect } from 'react';
import style from "../Home/Home.module.css"


const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return(
        <div>
           {isLoading ? (
            <div className={style.homeestilo}>
                <img
                    src="/assets/marvel-logo.gif"
                    alt="Cargando..."
                    style={{ width: '400px', height: '200px', borderRadius:'25%' }}
                />
                </div>
            ) : (
                <MarvelHeroConteiner />
            )}
        </div>
    )
}

export default Home;
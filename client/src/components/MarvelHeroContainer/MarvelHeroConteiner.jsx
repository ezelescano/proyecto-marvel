import { useEffect } from "react";
import MarvelHero from "../MarvelHero/MarvelHero";
import { useDispatch, useSelector} from "react-redux";
import { getAllCharacters } from "../Redux/actions";
import style from "../MarvelHeroContainer/MarvelHeroConteiner.module.css"

const MarvelHeroConteiner = () => {
   const {marvelHeros, getName} = useSelector((state) => state);

   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getAllCharacters())
   }, [dispatch])

   let result;
   getName.length ? result = getName : result = marvelHeros;
    return (
        <div className={style.marvelheroconteiner}>
            {result?.map((hero) => {
                return <MarvelHero
                id= {hero.id}
                image={hero.image}
                name= {hero.name}
                description={hero.description}
                />
            })}
        </div>
    )
}

export default MarvelHeroConteiner;
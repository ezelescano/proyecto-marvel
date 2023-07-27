import { useEffect } from "react";
import MarvelHero from "../MarvelHero/MarvelHero";
import { useDispatch, useSelector} from "react-redux";
import { getAllCharacters } from "../Redux/actions";


const MarvelHeroConteiner = () => {
   const {marvelHeros} = useSelector((state) => state);

   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getAllCharacters())
   }, [dispatch])
    return (
        <div>
            {marvelHeros?.map((hero) => {
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
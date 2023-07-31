import {useSelector} from "react-redux";
import MarvelHero from "../MarvelHero/MarvelHero";


const Pagination = () => {
    const { paginationPage, getName, marvelHeros } = useSelector((state) => state);

    const lastIndex = paginationPage * 9;
    const firstIndex = lastIndex - 9;

    const currentHero = marvelHeros.slice(firstIndex, lastIndex);

    let result;

    getName.length ? result = getName : result = currentHero;
    return (
        <>
        
          {result?.map((hero) => {
            return <MarvelHero
            key={hero.id}
            id= {hero.id}
            image={hero.image}
            name= {hero.name}
            description={hero.description}
            />
        })}                                                                                                                                                                                                                                                           
        
        </>
    )
}


export default Pagination;
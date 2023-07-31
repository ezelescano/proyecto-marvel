import { useEffect } from "react";
import MarvelHero from "../MarvelHero/MarvelHero";
import { useDispatch, useSelector} from "react-redux";
import { changePage, getAllCharacters, getByName } from "../Redux/actions";
import style from "../MarvelHeroContainer/MarvelHeroConteiner.module.css"
import Pagination from "../Pagination/Pagination";

const MarvelHeroConteiner = () => {
   const {marvelHeros, heros, getName} = useSelector((state) => state);

   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getAllCharacters())
   }, [dispatch])

  const marvelPerPage = 9;

  let totalPage;
  getName.length ? totalPage = 1 : totalPage = Math.ceil(marvelHeros.length / marvelPerPage);
    return (
        <div className={style.marvelheroconteiner}>
           <h1>Marvel Heros: </h1>
           {
            [...Array(totalPage).keys()].map(num => {
                return(
                    <button value={num + 1} onClick={(event) => dispatch(changePage(event.target.value))}>{num + 1}</button>
                )
            })
           }
           <Pagination/>
        </div>
    )
}

export default MarvelHeroConteiner;
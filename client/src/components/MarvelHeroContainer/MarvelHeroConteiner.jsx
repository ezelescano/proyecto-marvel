import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, getAllCharacters, getByName } from "../Redux/actions";
import style from "../MarvelHeroContainer/MarvelHeroConteiner.module.css"
import PaginationMarvel from "../Pagination/Pagination";


const MarvelHeroConteiner = () => {
    const { marvelHeros, getName } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])

    const marvelPerPage = 9;

    let totalPage;
    getName.length ? totalPage = 1 : totalPage = Math.ceil(marvelHeros.length / marvelPerPage);
    return (
       
            <div className={style.bodyfondo}>

                <div>
                    <h1 className={style.nametitle}>Personajes Marvel: </h1>
                </div>
                <div className={style.marvelheroconteiner}>
                    <PaginationMarvel />
                </div>

                <div className={style.buttonpagination}>
                    {
                        [...Array(totalPage).keys()].map(num => {
                            return (
                                <button
                                    className={style.buttonpagination}
                                    value={num + 1}
                                    onClick={(event) => dispatch(changePage(event.target.value))}>
                                    {num + 1}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        
    )
}

export default MarvelHeroConteiner;
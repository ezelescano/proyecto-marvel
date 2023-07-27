import { Link } from "react-router-dom";
import style from "../MarvelHero/MarvelHero.module.css"

const MarvelHero = (props) => {
    return (
        <div className={style.marvelhero}>
            <img src={props.image} alt={props.name} />
            <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
        </div>
    )
}

export default MarvelHero;
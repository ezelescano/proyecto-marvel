import { Link } from "react-router-dom";
import style from "../MarvelHero/MarvelHero.module.css"



const MarvelHero = (props) => {
  return (


    <Link  to={`/detail/${props.id}`}>
      <div className={style.marvelhero}>
        <img className={style.imgmarvelhero} src={props.image} alt={props.name} />
        <div className={style.namestyle} >
          <p>{props.name}</p>
        </div>
      </div>
    </Link>


  )
}

export default MarvelHero;
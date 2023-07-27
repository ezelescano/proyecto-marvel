import { Link, useLocation } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"
import Search from "../Search/Search";

const NavBar = () => {
    const location = useLocation();
    return (

        <nav className={style.navbar}>
            <Search/>
            {location.pathname !== "/home" && <Link to={"/home"}><button>Home</button></Link>}
            {location.pathname !== "/form" && <Link to={"/form"}><button>Create</button></Link>}
            {location.pathname !== "/about" && <Link to={"/about"}><button>About</button></Link>}
        </nav>
    )
}

export default NavBar;
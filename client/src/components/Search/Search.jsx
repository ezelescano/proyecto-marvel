import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Redux/actions";

const Search = () => {
    const [byName, setByName] = useState("");

    const dispatch = useDispatch()

    const inputHandler = (event) => {
        setByName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        setByName("");
        dispatch(getByName(byName))
    }
    return (
        <div>
            <form >
                <label htmlFor="search">Busca a tu Héroe!</label>
                <input
                    type="text"
                    name="search"
                    onChange={inputHandler}
                    value={byName}
                    placeholder="Encuentra a tu héroe!!">
                </input>
                <button type="submit" onClick={handlerSubmit}>BUSCAR</button>
            </form>
        </div>
    )
}

export default Search;
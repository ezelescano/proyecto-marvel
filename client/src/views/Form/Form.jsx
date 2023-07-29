import { useState } from "react";
import { useDispatch} from "react-redux";
import { createHero } from "../../components/Redux/actions";



const Form = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: ""
    })

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const createSubmit = (event) => {
        event.preventDefault();
        if (!input.name) {
            alert("Debe completar el nombre")
        } else {
            dispatch(createHero(input));
            setInput({
                name: "",
                image: "",
                description:""
            });
            alert("Heroe Creado!!")
        }

    }
    return (
        <div>
            <form onSubmit={createSubmit}>
                <label
                    htmlFor="name">
                    Nombre:
                </label>
                <input
                    name="name"
                    type="text"
                    onChange={inputHandler}
                    value={input.name}
                    placeholder="Ejem. Marvel Man" />

                <label
                    htmlFor="image">
                    Imagen:
                </label>
                <input
                    type="url"
                    value={input.image}
                    name="image"
                    onChange={inputHandler}
                    placeholder="Ejem. http://example.exaple.com/imagen.jpg"
                    maxLength="100" />


                <label
                    htmlFor="description">
                    Descripcion:
                </label>
                <input
                    type="text"
                    name="description"
                    onChange={inputHandler}
                    value={input.description}
                    placeholder="Ejem. Es un Heroe" />

                <button >Crear</button>
            </form>
        </div>
    )
}

export default Form;
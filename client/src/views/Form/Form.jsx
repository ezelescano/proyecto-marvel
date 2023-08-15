import { useState } from "react";
import { useDispatch } from "react-redux";
import { createHero } from "../../components/Redux/actions";
import validate from "./validate";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const CreateForm = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: ""
    })
    const [errors, setErrors] = useState({ name: '' })

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event?.target?.name]: event?.target?.value
        });
        setErrors(
            validate({
                ...input,
                [event.target.name]: event.target.value
            })
        )
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
                description: ""
            });
            alert("Heroe Creado!!")
        }

    }
    return (
        <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control name="name"
                    type="text"
                    onChange={inputHandler}
                    value={input.name}
                    placeholder="Ejem. Marvel Man" />
            </Form.Group>
            {errors.name && <p>{errors.name}</p>}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Imagen: </Form.Label>
                <Form.Control value={input.image}
                    name="image"
                    onChange={inputHandler}
                    maxLength="100"
                    type="url"
                    placeholder="Ejem. http://example.exaple.com/imagen.jpg" />
             {errors.image && <p>{errors.image}</p>}        
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion: </Form.Label>
                <Form.Control as="textarea"
                    rows={3}
                    name="description"
                    onChange={inputHandler}
                    value={input.description}
                    placeholder="Ejem. Es un Heroe" />
            </Form.Group>
            <Button onClick={createSubmit} variant="outline-success">Crear</Button>
        </Form>
    )
}

export default CreateForm;
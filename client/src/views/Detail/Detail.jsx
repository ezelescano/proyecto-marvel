import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByID } from "../../components/Redux/actions";



const Detail = () => {
    const { detail } = useSelector((state) => state)
    console.log("sou el detail del modulo", detail);
    const { id } = useParams();
    console.log("soy el id del pparams", id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByID(id))
    }, [dispatch, id]);

    return (
        <div>
            <img src={detail?.thumbnail?.path ? `${detail?.thumbnail?.path}.${detail?.thumbnail?.extension}` : detail?.image} alt={detail?.name} />

            <p>Nombre: {detail?.name}</p>
            <p>Descripcion: {detail?.description}</p>
        </div>
    )
}

export default Detail;
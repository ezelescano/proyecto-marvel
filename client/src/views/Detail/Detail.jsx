import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByID } from "../../components/Redux/actions";
import Image from "react-bootstrap/Image"
import style from "../Detail/Detail.module.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

const Detail = () => {
    const { detail } = useSelector((state) => state)

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByID(id))
    }, [dispatch, id]);

    return (
        <body>
            <div className={style.divimagen}>
                <div >
                    <Image style={{ width: '450px', height: '350px' }} src={detail?.thumbnail?.path ?
                        `${detail?.thumbnail?.path}.${detail?.thumbnail?.extension}`
                        : detail?.image} alt={detail?.name}
                        thumbnail />
                </div >
                <Container className={style.divimagen}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{detail?.name}</Card.Title>
                            <Card.Subtitle
                                className="mb-2 text-muted">
                                Descripcion
                            </Card.Subtitle>
                            <Card.Text>
                                {detail?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </body>
    )
}

export default Detail;
import { Link } from "react-router-dom";
// import style from "../MarvelHero/MarvelHero.module.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const MarvelHero = (props) => {
    return (
     
        <Link to={`/detail/${props.id}`}>
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={props.image} alt={props.name} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> 
      </Link> 
 
    )
}

export default MarvelHero;
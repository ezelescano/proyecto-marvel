import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { getByName } from "../Redux/actions";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import style from "../NavBar/NavBar.module.css"

const NavBar = () => {

  const [byName, setByName] = useState("");

  const inputHandler = (event) => {
      setByName(event.target.value)
  }

  const handlerSubmitBis = (event) => {
      event.preventDefault();
      setByName("");
      dispatch(getByName(byName))
  }
  
  const dispatch = useDispatch()

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(reset())
  }

  const location = useLocation();
  const { logout } = useAuth0();
  return (

    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className={style.customNavbarStyle} variant="light">
          <Container fluid>
            <Navbar.Brand href="/home">
            <img
              alt=""
              src="/assets/iconMarvel.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Proyecto Marvel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">{location.pathname !== "/home" && <Link to={"/home"}><Button variant="light">Inicio</Button></Link>}</Nav.Link>
                  {/* <Nav.Link href="#action2">{location.pathname !== "/" && <Button variant="light" type="submit" onClick={handlerSubmit} >Reiniciar</Button>}</Nav.Link> */}
                  {/* <Nav.Link href="/form">{location.pathname !== "/form" && <Link to={"/form"}><Button variant="light">Crear</Button></Link>}</Nav.Link> */}
                  <Nav.Link href="/about">{location.pathname !== "/about" && <Link to={"/about"}><Button variant="light">Sobre mi</Button></Link>}</Nav.Link>
                  <Nav.Link ><Button variant="outline-danger" onClick={() => logout({ logoutParams: { returnTo: "https://proyecto-marvel-six.vercel.app/" } })}>Salir</Button></Nav.Link>
                </Nav>
                <Form className="d-flex" >
                  <Form.Control
                    type="text"
                    placeholder="Encuentra a tu héroe!!"
                    className="me-2"
                    aria-label="Buscar"
                    onChange={inputHandler}
                    value={byName}
                  />
                  <Button type="submit" onClick={handlerSubmitBis} variant="outline-success">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

  )
}

export default NavBar;
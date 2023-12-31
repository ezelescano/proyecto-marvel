import style from "../About/About.module.css"

const About = () => {
  return (
    <div className={style.divAbout}>
      <div >
        <img
          className={style.imgStyle}
          src="\assets\eze perfil.jpg"
          alt="Eze Lescano"
        />
      </div>
      <div className={style.divDescripcion}>
        <h3>DESCRIPCIóN</h3>
        
        <div >
          <p className={style.parafoStyle}>
            <b>Soy Ezequiel </b>
            Durante 11 años trabajé en el sector de transporte público de
            pasajeros, pero sentía que necesitaba un cambio en mi vida. Decidí
            seguir mi pasión por la tecnología y convertirme en un Full Stack
            Developer. Ahora, tengo sólidos conocimientos en HTML, CSS, React,
            Redux, JavaScript, Sequelize, PostgreSQL, Express, y otras
            tecnologías, lo que me permite diseñar y desarrollar aplicaciones
            web de alta calidad. Estoy emocionado por seguir aprendiendo y
            mejorando mis habilidades para continuar creciendo como profesional
            en esta carrera que me apasiona.
          </p>
        </div>
        <div className={style.divIcons} >
          <a href="https://github.com/ezelescano" target="_blank">
            <img src="\assets\github.ico" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/eze-lescano83/" target="_blank">
            <img src="\assets\linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;
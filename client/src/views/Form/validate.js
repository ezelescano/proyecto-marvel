

export const validate = (input) => {
  let errors = {}
    if(!input.name) {
        errors.name = "El nombre es requerido";
    }
    if(!input.image) {
        errors.image = "Es requerida la imagen";
    } else if (
        !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
          input.image
        )
      ) {
        errors.image = "Es requerida una URL valida";
      }
      return errors
}

export default validate;
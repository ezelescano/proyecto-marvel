

const validate = (input) => {
  let error = {}
    if(!input.name) {
        error.name = "El nombre es requerido";
    }
    if(!input.image) {
        error.image = "Es requerida la imagen";
    } else if (
        !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
          input.image
        )
      ) {
        error.image = "An URL of an image is required";
      }
}

export default validate;
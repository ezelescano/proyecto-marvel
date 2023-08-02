const { User} = require("../db");

const createUser = async(email, password) => {
         if (typeof email !== 'string' || email.trim().length === 0 ||
        typeof password !== 'string' || password.trim().length === 0) {
        return "Debe completar los campos";
       const user = await User.findOne({ where: { email: email } });
        if (user)   return "Este mail ya está registrado";
        } else {
        try {
            let newUser = await User.create({
                email,
                password
            });
            return "Usuario Creado";
        } catch (error) {
            return "Hubo un problema con el servidor";
        }
    }
}

module.exports = createUser;
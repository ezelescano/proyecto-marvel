const createUser = require("../controllers/userConstroller.js");

const createtUserhandler = async (req, res) => {
    const {email, password} = req.body;
    try {
        const result = await createUser(email, password);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({error: "Los datos no son correctos"})
    }
}

module.exports = createtUserhandler;
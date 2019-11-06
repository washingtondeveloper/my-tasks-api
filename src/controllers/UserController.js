import User from "../models/User";

class UserController {
  async store(req, res) {
    /** Verififcar se o usuario ja esta cadastro */
    const { email } = req.body;
    const userFound = await User.findOne({ email });

    if (userFound) return res.json({ message: "Usuário já esta cadastrado" });

    const userCreated = await User.create(req.body);
    userCreated.password = undefined;

    return res.status(201).json(userCreated);
  }
}

module.exports = new UserController();

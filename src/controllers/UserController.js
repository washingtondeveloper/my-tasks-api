import UserServices from "../services/UserServices";

class UserController {
  constructor(userServices) {
    this.userServices = userServices;

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    /** Verififcar se o usuario ja esta cadastro */
    const { email } = req.body;

    const userFound = await this.userServices.findOne({ email });

    if (userFound) return res.json({ message: "Usuário já esta cadastrado" });

    const userCreated = await this.userServices.create(req.body);
    userCreated.password = undefined;

    return res.status(201).json(userCreated);
  }
}

module.exports = new UserController(UserServices);

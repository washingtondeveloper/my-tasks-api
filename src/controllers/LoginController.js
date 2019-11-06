import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { secret } from "../config/auth.json";

function generateToken(params) {
  return jwt.sign(params, secret, { expiresIn: 86400 });
}

class LoginController {
  async show(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    if (!(await bcrypt.compare(password, user.password)))
      return res
        .status(400)
        .json({ message: "Usuário ou Senha deve está incorreto" });

    user.password = undefined;

    const token = generateToken({ id: user._id });

    return res.json({ user, token });
  }
}

module.exports = new LoginController();

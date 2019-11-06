import jwt from "jsonwebtoken";
import { secret } from "../config/auth.json";

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "O token não foi passado" });

  const parts = authorization.split(" ");

  if (parts.length !== 2)
    return res.status(401).json({ message: "Token error" });

  const [Bearer, token] = parts;

  if (!/^Bearer$/.test(Bearer))
    return res.status(401).json({ message: "Token não formatado" });

  jwt.verify(token, secret, (error, decoded) => {
    if (error) return res.status(401).json({ message: "Token inválido" });

    req.userid = decoded.id;
    return next();
  });
};

const jwt = require("jsonwebtoken");
import dotenv from "dotenv";

dotenv.config();

const isAuth = (req: any, res: any, next: any) => {
  try {
    const authorizationHeader = req.headers.authorization || "";
    const token = authorizationHeader.split(" ")[1];
    const def_key =
      process.env.JWT_STR || "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    // console.log('token=>',token)

    const decoded = jwt.verify(token, def_key);

    req.user = decoded.user;
    // res.status(200).send({ message: "ok credentials"});
    next();
  } catch (error) {
    res.status(401).send({ message: "wrong credentials", error: error });
  }
};

export { isAuth };

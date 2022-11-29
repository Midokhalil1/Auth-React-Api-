import Jwt from "jsonwebtoken";
import { secretKey } from "../secrets.js";


export async function isUserReallyUser(req, res, next){

    const token = req.headers.authorization 
    // verify and decode 
   const decodedToken = Jwt.verify(token, secretKey)

}

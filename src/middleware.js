import Jwt from "jsonwebtoken";
import { secretKey } from "../secrets.js";


export function isUserReallyUser(req, res, next){

    const token = req.headers.authorization 
    // verify and decode 
   const decodedToken = Jwt.verify(token, secretKey)
//    now check that the uid they're requesting tp patch is the one in their token

const requestedUid = req.param.uid
if(decodedToken.uid !== requestedUid) {
    res.status(401).send ({ message: 'Not authorized' })
    return

}

next()

}

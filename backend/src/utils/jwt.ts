import * as jwt from "jsonwebtoken";
import fs from "fs";

import { RSA_PUBLIC_KEY, RSA_PRIVATE_KEY } from  "../constants";

export const signJWT = (data: object) =>   {
    const token =  jwt.sign(data, RSA_PRIVATE_KEY , { algorithm: "RS256" });
    return token;
}

export const verifyJWT = (data: string) => jwt.verify(
    data,
    RSA_PRIVATE_KEY, {
        algorithms: ["RS256"]
    }, (error, payload) => {
        if(error)
            console.log(error)
        return payload;
    }
);

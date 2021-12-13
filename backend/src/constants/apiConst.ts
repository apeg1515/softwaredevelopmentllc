import * as fs from "fs";
import * as path from "path";

/*
 * all api endpoints
 */

// "Tom Brady is the greatest of all time"
export const SECRET_HASH = "VG9tIEJyYWR5IGlzIHRoZSBncmVhdGVzdCBvZiBhbGwgdGltZQ=="

export const HEALTHCHECK_API = "/api/service/v1/healthcheck";

export const REGISTER_API = "/api/service/v1/register";

export const CAR_POST_API = "/api/service/v1/car";
export const CAR_GET_API = "/api/service/v1/cars";
export const CAR_PUT_API = "/api/service/v1/car";
export const CAR_DELETE_API = "/api/service/v1/car";

export const LOGIN_POST_API = "/api/service/v1/login";
export const LOGOUT_POST_API = "/api/service/v1/logout";

export const RSA_PUBLIC_KEY = fs.readFileSync( __dirname + "/certificate.pem");
export const RSA_PRIVATE_KEY = fs.readFileSync( __dirname + "/jwtRS256.key");


import { METHODS }  from "../constants/methods";
import { Request, NextFunction } from "express";
import url from "url";

export interface ExMethods {
    req: Request,
    res: Response,
    next: NextFunction,
};

export interface routeProps {
    method: METHODS,
    url: string,
}



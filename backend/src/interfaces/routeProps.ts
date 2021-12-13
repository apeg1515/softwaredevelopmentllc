import { METHODS }  from "../constants/methods";
import { Request, Response, NextFunction } from "express";


export interface ExMethods {
    req: Request,
    res: Response,
    next: NextFunction,
};

export interface routeProps {
    method: METHODS,
    url: string,
}



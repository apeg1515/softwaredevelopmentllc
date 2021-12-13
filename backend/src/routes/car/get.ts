import { pipe } from "../../utils";
import { CAR_GET_API, SECRET_HASH } from "../../constants/";
import { route, routeLogger, routeAuth } from "../../decorators";
import { METHODS } from "../../constants";
import { Request, Response, NextFunction } from "express";
import { GetCarControllerClass } from "../../controllers/";

class CarGetRoute {
    // @routeLogger()
    @routeAuth(SECRET_HASH)
    @route({
        method: METHODS.GET,
        url: CAR_GET_API,
    }) async function(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
             await pipe(
                GetCarControllerClass.getCar
            )({
                req,
                res,
                next
            });
        } catch(exception) {
            console.log(exception)
        }
    }
}

export const carGetRoute = new CarGetRoute();

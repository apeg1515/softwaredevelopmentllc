import { pipe } from "../../utils";
import { CAR_POST_API, SECRET_HASH } from "../../constants/";
import { route, routeLogger, routeAuth } from "../../decorators";
import { METHODS } from "../../constants";
import { Request, Response, NextFunction } from "express";
import { PostCarControllerClass } from "../../controllers/";

class CarPostRoute {
    // @routeLogger()
    @routeAuth(SECRET_HASH)
    @route({
        method: METHODS.POST,
        url: CAR_POST_API,
    }) async function(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
             await pipe(
                PostCarControllerClass.addCar
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

export const carPostRoute = new CarPostRoute();

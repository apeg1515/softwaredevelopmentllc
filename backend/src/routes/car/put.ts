import { pipe } from "../../utils";
import { CAR_PUT_API, SECRET_HASH } from "../../constants/";
import { route, routeLogger, routeAuth } from "../../decorators";
import { METHODS } from "../../constants";
import { Request, Response, NextFunction } from "express";
import { PutCarControllerClass } from "../../controllers/";

class CarPutRoute {
    // @routeLogger()
    @routeAuth(SECRET_HASH)
    @route({
        method: METHODS.PUT,
        url: CAR_PUT_API,
    }) async function(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
             await pipe(
                PutCarControllerClass.updateCar
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

export const carPutRoute = new CarPutRoute();

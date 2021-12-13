import { pipe } from "../../utils";
import { CAR_DELETE_API, SECRET_HASH } from "../../constants/";
import { route, routeLogger, routeAuth } from "../../decorators";
import { METHODS } from "../../constants";
import { Request, Response, NextFunction } from "express";
import { DeleteCarControllerClass } from "../../controllers/";

class CarDeleteRoute {
    // @routeLogger()
    @routeAuth(SECRET_HASH)
    @route({
        method: METHODS.DELETE,
        url: CAR_DELETE_API,
    }) async function(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
             await pipe(
                DeleteCarControllerClass.deleteCar
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

export const carDeleteRoute = new CarDeleteRoute();

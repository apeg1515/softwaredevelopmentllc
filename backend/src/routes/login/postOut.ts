import { pipe } from "../../utils";
import { LOGOUT_POST_API, SECRET_HASH } from "../../constants/";
import { route, routeLogger, routeAuth } from "../../decorators";
import { METHODS, REGISTER_API } from "../../constants";
import { Request, Response, NextFunction } from "express";
import { PostLogOutControllerClass } from "../../controllers/";

class LogOutPostRoute {
    // @routeLogger()
    @routeAuth(SECRET_HASH)
    @route({
        method: METHODS.POST,
        url: LOGOUT_POST_API,
    }) async function(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
             await pipe(
                PostLogOutControllerClass.logOut
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

export const logOutPostRoute = new LogOutPostRoute();


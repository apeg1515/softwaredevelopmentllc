import { pipe } from "../../utils";
import { LOGIN_POST_API } from "../../constants/";
import { route, routeLogger, routeAuth } from "../../decorators";
import { METHODS, REGISTER_API } from "../../constants";
import { Request, Response, NextFunction } from "express";
import { PostLoginControllerClass } from "../../controllers/";

class LoginPostRoute {
    // @routeLogger()
    // @routeAuth("secret")
    @route({
        method: METHODS.POST,
        url: LOGIN_POST_API,
    }) async function(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
             await pipe(
                PostLoginControllerClass.login
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

export const loginPostRoute = new LoginPostRoute();

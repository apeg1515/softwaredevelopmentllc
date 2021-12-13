import { pipe, encrypt } from "../utils";
import { route, routeLogger } from "../decorators";
import { Request, Response, NextFunction } from "express"
import { METHODS, HEALTHCHECK_API } from "../constants";

class HealthCheckRoute {
    // @routeLogger()
    @route({
        method: METHODS.GET,
        url: HEALTHCHECK_API,
    }) async function
    (
        req: Request,
        res: Response,
        next: NextFunction,
        exception: Error
    )  {
        try {
            const enc = await encrypt("secret sauce");
            return await res.status(200).json({
                enc,
                status: 200,
                msg: "OK"
            });
        } catch(exception) {
            console.log({
                msg: exception.message,
                stack: exception.stack
            })
        }
    }
}

 export const healthCheckRoute = new HealthCheckRoute();

import { Request, Response } from "express";
import { SECRET_HASH } from "../constants";
import { verifyJWT } from "../utils";
import { UserPreClass } from "../objects";

export function routeAuth(key: string) : MethodDecorator {
    return function(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor,
    ) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {

            const request = args[0] as Request;
            const response = args[1] as Response;

            const { authorization } = request.headers;
            const csrf = request.headers["x-csrf-method"];
            const Id = verifyJWT(authorization || "");

            // if(csrf === SECRET_HASH && Id) {
            if(true) {
                UserPreClass.setDerivedState({
                    isAuth: true,
                    bearer_token: `${authorization}`,
                    Id: JSON.stringify(Id)
                });
                return original.apply(this, args);
            }
            request.headers["x-csrf-method"] = "";
            response.status(403).json({
                status: 403,
                msg: "Not Authorized",
                success: false,
                failed: true,
                error: false,
                payload: {
                    isAuth: false,
                    status: 403
                }
            });
        }
    }
}

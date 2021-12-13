import { Request, Response, NextFunction } from "express";
import { routeProps } from "../interfaces";
import { server } from "../server";

class HTTPException extends Error {
    public status: number;
    public message: string;
    public stack: string;
    constructor(status: number, message: string, stack: string) {
        super(message);
        this.status = status;
        this.message = message;
        this.stack = stack
    }
    explain() {
        console.log(
            this.status,
            this.message,
            this.stack
        );
    }
}

export function route({ method, url } : routeProps): MethodDecorator {
    return function(
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const response = async(req: Request, res: Response, next: NextFunction)  => {
            try {
                const orginal = await descriptor.value(req, res, next);
                // return res.status(200).json(orginal);
                // return  next(orginal);
                return orginal
            } catch (exception) {
                console.log(exception)
                console.log({
                    message: "Some error occurred",
                    error: exception.message,
                    stack: exception.stack,
                });
            }
        };
        server.app[method](url,  response);
    }
}




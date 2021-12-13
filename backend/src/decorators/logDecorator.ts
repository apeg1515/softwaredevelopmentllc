import { Request } from "express";

export function routeLogger(): MethodDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const orginal = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let request = args[0] as Request;
            try {
                const { url, method, body, headers, } = request;
                console.log("[LOG]", { url, method, body, headers });
                return orginal.apply(this, args);
            } catch (expection) {
                console.debug(expection);
            }
        };
    }
}

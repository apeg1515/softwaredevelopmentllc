import { server } from "./src/server";
import {
    healthCheckRoute,
    logOutPostRoute,
    loginPostRoute,
    carPutRoute,
    carGetRoute,
    carPostRoute,
    carDeleteRoute
} from "./src/routes"

/*
 * HEALTH_CHECK_API
 */
healthCheckRoute;

/*
 * CAR_APIs
 */
carPutRoute;
carGetRoute;
carPostRoute;
carDeleteRoute;
/*
 *  LOGIN_APIs
 */
loginPostRoute;
logOutPostRoute;

server.start();


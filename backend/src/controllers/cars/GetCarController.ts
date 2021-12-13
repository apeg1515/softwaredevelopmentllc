import { CAR_GET_API } from "../../constants";
import { CarClass, mongoInstance } from "../../objects";
import { ExMethods } from "../../interfaces/";

export const GetCarControllerClass = ((Class) => {

    return new class GetCar extends Class {
        constructor() {
            super();
            this.getCar = this.getCar.bind(this);
        }
        async getCar({ req, res, next }: ExMethods) : Promise<Object | Error> {
            try {
                const data = await mongoInstance.findQuery({
                    cName: "cars",
                    qParams: {}
                });
                return res.status(200)
                .json({
                    route: CAR_GET_API,
                    success: 200,
                    payload: [ ...data ]
                });
            } catch(e) {
                return e
            }
        }
    }
})(CarClass);

import { CAR_PUT_API } from "../../constants";
import { UserClass } from "../../objects";
import { ExMethods } from "../../interfaces/";

export const PutCarControllerClass = ((Class) => {

    return new class PCCC extends Class {
        constructor() {
            super();
            this.updateCar = this.updateCar.bind(this);
        }
        async updateCar({ req, res, next }: ExMethods) {
            try {
                console.log(req.body);
                return res.status(200)
                .json({
                    route: CAR_PUT_API,
                    success: 200
                });
            } catch(e) {
                return e
            }
        }

    }
})(UserClass);


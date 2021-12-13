import { CAR_POST_API } from "../../constants";
import { CarClass, mongoInstance } from "../../objects";
import { ExMethods } from "../../interfaces/";

export const PostCarControllerClass = ((Class) => {

    return new class PostCar extends Class {
        constructor() {
            super();
            this.addCar = this.addCar.bind(this);
        }
        async addCar({ req, res, next }: ExMethods) : Promise<Object | Error> {
            try {
                const data = await mongoInstance.insertQuery({
                    cName: "cars",
                    qParams: {
                        ...req.body
                    }
                });
                return res.status(200)
                .json({
                    route: CAR_POST_API,
                    success: 200,
                    payload: [ ...data ]
                });
            } catch(error) {

                return error;
            }
        }

    }
})(CarClass);

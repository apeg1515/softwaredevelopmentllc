import { CAR_DELETE_API } from "../../constants";
import { CarClass, mongoInstance } from "../../objects";
import { ExMethods } from "../../interfaces/";

export const DeleteCarControllerClass = ((Class) => {

    return new class DeletCar extends Class {
        constructor() {
            super();
            this.deleteCar = this.deleteCar.bind(this);
        }
        async deleteCar({ req, res, next }: ExMethods) : Promise<Object | Error> {
            try {

                const { id } = req.body;
                const data = await mongoInstance.deleteQuery({
                    cName: "cars",
                    qParams: `ObjectId(${id})`
                });
                return res.status(200)
                .json({
                    route: CAR_DELETE_API,
                    success: 200,
                    payload: [ ...data ]
                });

            } catch(error) {

                return error;
            }
        }

    }
})(CarClass);

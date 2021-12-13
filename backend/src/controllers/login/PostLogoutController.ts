import { LOGOUT_POST_API } from "../../constants";
import { UserClass } from "../../objects";
import { ExMethods } from "../../interfaces/";

export const PostLogOutControllerClass = ((Class) => {

    return new class PostLogOut extends Class {
        constructor() {
            super();
            this.logOut = this.logOut.bind(this);
        }
        async logOut({ req, res, next }: ExMethods) {
            try {
                console.log(req.body);
                return res.status(200)
                .json({
                    route: LOGOUT_POST_API,
                    success: 200
                });
            } catch(e) {
                return e
            }
        }

    }
})(UserClass);


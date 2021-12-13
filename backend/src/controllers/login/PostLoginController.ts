import * as jwt from "jsonwebtoken";
import { LOGIN_POST_API, SECRET_HASH , RSA_PRIVATE_KEY} from "../../constants";
import { signJWT, verifyJWT } from "../../utils";
import { UserClass, mongoInstance } from "../../objects";
import { ExMethods } from "../../interfaces/";

export const PostLoginControllerClass = ((Class) => {

    return new class PostLogin extends Class {
        constructor() {
            super();
            this.login = this.login.bind(this);
        }
        async login({ req, res, next }: ExMethods) {
            try {
                const { email, pswd } = req.body;
                console.log(req.body)
                if(!email || !pswd) {
                    return res.status(401).json({
                        route: LOGIN_POST_API,
                        success: 401,
                        mgs: "missing email or password"
                    });
                }
                const data = await mongoInstance.findQuery({
                    cName: "users",
                    qParams: { email }
                });
                if(data[0].password === pswd) {

                    let token = signJWT({
                        userId: `${data[0].Id}`,
                        exp: Math.floor(Date.now() / 1000) + (60 * 60)
                    });
                    req.headers["x-csrf-method"] = SECRET_HASH;

                    return res.status(200)
                    .json({
                        route: LOGIN_POST_API,
                        success: 200,
                        payload: [ token ]
                    });
                } else {
                    return res.status(404).json({
                        success: false
                    });
                }

            } catch(e) {
                return e
            }
        }

    }
})(UserClass);


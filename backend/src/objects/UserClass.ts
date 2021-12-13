import { IUserState, IUserFailedState } from "../interfaces"
import { mongoInstance } from "./index"

const thisUser = {
    stateArr: new Array,
    failedArr: new Array,
    bool: (x: number) => Boolean(Object.keys(x).length),
    derivedClass() {
        return class Derived {

            static setDerivedState(state: IUserState) {
                thisUser.stateArr.push(state);
            }
            static setFailedDS(state: IUserFailedState) {
                thisUser.failedArr.push(state);
            }

            static getFailedState(): Array<IUserFailedState> | boolean {
                if(Boolean(thisUser.failedArr.length))
                    return thisUser.failedArr[ thisUser.failedArr.length - 1 ];
                return false
            }

            static getDerivedState(): Array<IUserState> | boolean {
                if(Boolean(thisUser.stateArr.length))
                    return thisUser.stateArr[ thisUser.stateArr.length - 1 ];
                return false
            }

            static destructAllState() {
                thisUser.stateArr = new Array;
                thisUser.failedArr = new Array;
                return thisUser;
            }
        }
    },
    userClass() {
        const UserClass = (() => {
            const _state_ = new WeakMap();
            const _failedState_ = new WeakMap();

            return class UserClass {
                constructor() {
                    const derived = thisUser.derivedClass();
                    const defaultState : IUserState = {
                        Id: "",
                        isAuth: false
                    };
                    const defaultFailedState: IUserFailedState = {};
                    _state_.set(
                        this, (
                            derived.getDerivedState() ? derived.getDerivedState() : defaultState
                        )
                    );
                    _failedState_.set(
                        this, (
                            derived.getFailedState() ? derived.getFailedState() : defaultFailedState
                        )
                    );
                }
                destructor() :void {
                    thisUser.derivedClass().destructAllState();
                }

                get currentState() {

                    return thisUser.derivedClass().getDerivedState();
                }
                get currentFailedState() {
                    return thisUser.derivedClass().getFailedState();
                }
                private setState(props: IUserState) {
                    thisUser.derivedClass().setDerivedState(props);
                    _state_.set(this, { ...props });
                }

                async findUser(obj?: any) {
                    try {
                        //return await mongoInstance.findQuery({});
                    } catch(error) {
                        return error;
                    }
                }
            } // end of class
        })();
        return UserClass;
    }
};

export const UserPreClass = thisUser.derivedClass();
export const UserClass = thisUser.userClass();

import React from 'react';


interface MainIF {
    env: string,
    hostname: string,
};

export interface MainApplicationRoutes {
    readonly routeName: string,
    readonly path: string,
    readonly isPublic: boolean,
    readonly rqLvl: number
}

export interface MainRoutes extends Array<MainApplicationRoutes> {
    [index: number]: MainApplicationRoutes;
}


class InitializedClassMain <T> {

    getLocation () {
        console.log(this.current);
       //return this.appRoutes.filter((key) => key.routeName === __WINDOW_LOCATION_PATH__);
    }

    appRoutes : MainRoutes = [
        { routeName: "home", path: "/", isPublic: true, rqLvl: 0 },
        { routeName: "about", path: "/about", isPublic: true, rqLvl: 0 },
        { routeName: "login", path: "/login", isPublic: true, rqLvl: 0 },
        { routeName: "app", path: "/auth", isPublic: false, rqLvl: 1 }
    ];

    constructor(public current: T) {}

    update(next: Partial<T>) {
        this.current = {
            ...this.current,
            ...next
        };
    }

    run(next: Partial<T>) {
        this.current = {
            ...this.current,
            ...next
        };
    }

}

export const MainCL = new InitializedClassMain({
    env: "dev",
    hostname: "dev.site.com",
} as MainIF);

export const MainCtx = React.createContext(MainCL);


export type InitializedMainProps = {
    children: JSX.Element,
    value: any,
}

export const InitializedMainProvider : React.FC<InitializedMainProps> = ({ children, value }) => {

    return (
        <MainCtx.Provider value={value}>
            {children}
        </MainCtx.Provider>
    );
};

export const ConnectWithStore = (Container: React.ComponentType<any>) =>  (props : any) =>
    (
        <MainCtx.Consumer>
            {context => <Container { ...context } { ...props }/>}
        </MainCtx.Consumer>
    );


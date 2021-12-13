import React from 'react';
/*
interface ApplicationIF {
    env: String;
    hostname: String;
    update: () => void
};

const ApplicationRCT = React.createContext<Partial<ApplicationIF> | {}>({});


class InitializedClassApp <T> {
    constructor(public current: T) {}
    update(next: Partial<T>) {
        this.current = {
            ...this.current,
            ...next
        };
    }
}

// const InitApp = new InitializedClassApp({} as AppInterface);

export const InitializedContext = React.createContext(InitApp);

export type InitializedProps = {
    children: JSX.Element,
    value: any,
}

type ConnectWithStoreInterface = {
    Container: React.Component,
    children: any,
};


export namespace Init {
    export const Consumer = InitializedContext.Consumer;
}

export const connectWithUserStore = (Container: typeof React.Component) => (props: any) => {
    console.log("CONTAINER", Container)
    return (
      <InitializedContext.Consumer>
        { context => <Container {...context} {...props} /> }
      </InitializedContext.Consumer>
    )
};
*/
/*
export const Connect = (Container: typeof React.Component) => ( children : JSX.Element) => {
    console.log("HTELLE",Container);
     return (
        <InitializedContext.Consumer>
            {context => <Container { ...context } {...children}/>}
        </InitializedContext.Consumer>
    );
}
*/

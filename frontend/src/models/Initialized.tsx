import React from 'react';

interface AppInterface {
    env: String,
    hostname: String,
    update: () => void
};

class InitializedClassApp <T> {
    constructor(public current: T) {}
    update(next: Partial<T>) {
        this.current = {
            ...this.current,
            ...next
        };
    }
}

const InitApp = new InitializedClassApp({} as AppInterface);

// export const InitializedContext = React.createContext(InitApp);
export const InitializedContext = React.createContext<Partial<AppInterface> | null>(null);


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



// export const ConnectWithStore = (Container: any) =>  ( props : any) => {
//     console.log(props)
//     return (
//         <InitializedContext.Consumer>
//             {context => <Container { ...context } { ...props }/>}
//         </InitializedContext.Consumer>
//     );
// };

export function ConnectWithStore<Type>(Component : React.ComponentType<Type>)  {
    return (props: Type) => (
        <InitializedContext.Consumer>
            {context => <Component { ...context } { ...props }/>}
        </InitializedContext.Consumer>
    )
}

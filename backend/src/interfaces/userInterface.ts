export interface IUserState {
    Id?: string,
    isAuth?: boolean,
    bearer_token?: string,
    data?: Object,
    sessionId?: string,
};

export interface IUserFailedState {
    success?: boolean,
    failed?: boolean,
    status?: string,
};

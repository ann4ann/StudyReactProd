export interface User {
    id: string;
    username: string;
    // пароль не нужно хранить на frontend
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}

import {createContext} from "react";

function voidF() {
}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: voidF,
    logout: voidF,
    isAuthenticated: false
})
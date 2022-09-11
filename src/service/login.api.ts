import { LoginParam } from "../interfaces/components";
import http from "../http-common";


export const LoginService = {
    login(endpoint: string, payload:LoginParam) {
        return http.post(endpoint, payload)
    } 
}

import http from "../http-common";

export const AnimalService = {
    getAll(endpoint: string) {
        return http.get(endpoint)
    } 
}

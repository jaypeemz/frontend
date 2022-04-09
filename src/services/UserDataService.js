import { def } from "@vue/shared";
import http from "../http-common.js";

class UserDataService {
    get(id) {
        return http.get(`/user/${id}`);
    }
}

export default new UserDataService();
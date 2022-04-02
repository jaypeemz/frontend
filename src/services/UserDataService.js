import { def } from "@vue/shared";
import http from "../http-common.js";

class CourseDataService {
    get(id) {
        return http.get(`/courses/${id}`);
    }
    delete(id) {
        return http.delete(`/courses/${id}`)
    }
    save(id) {
        return http.put(`/courses/${id}`)
    }
}

export default new CourseDataService();
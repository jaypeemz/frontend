import http from "../src/http-common";
class AudiobookDataService {
  getAll() {
    return http.get("/audiobooks");
  }
}
export default new AudiobookDataService();
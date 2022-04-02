import http from "../http-common";
class AudiobookDataService {
  getAll() {
    return http.get("/audiobooks");
  }
}
export default new AudiobookDataService();
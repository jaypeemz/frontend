import http from "../http-common";

class AudiobookDataService {
  // getAll() {
  //   return http.get("/audiobooks");
  // }

  get(id) {
    //parse the id to get value of audiobook
    return http.get(`/audiobooks/${id}`)
  }
  delete(id) {
        return http.delete(`/audiobooks/${id}`)
    }
  save(id) {
    return http.put(`/audiobooks/${id}`)
  }
}
export default new AudiobookDataService();
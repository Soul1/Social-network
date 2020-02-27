import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "816f5327-cf93-453c-ada0-1cadd9b318e9"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)

  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then(response => response.data)
  }
}

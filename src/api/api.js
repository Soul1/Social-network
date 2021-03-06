import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "816f5327-cf93-453c-ada0-1cadd9b318e9"
  },
});

export const usersAPI = {
  getUsers(currentPage = 2, pageSize = 6) {
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
  },
  getProfile(userId) {
    console.warn('Use profileAPI');
    return profileAPI.getProfile(userId)
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`, {status: status})
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete(`auth/login`)
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  },
};
import axios from "axios";
import {StatusType} from "../components/redux/profileReducer";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'de342f74-3acb-43a4-b6f0-3143b51bea1e'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export const API = {
    profileAPI: {
        getProfileAPI(id: string) {
            return axiosInstance.get(`profile/${id}`).then(response => response.data)
        },
        getStatusAPI(id: string) {
            return axiosInstance.get(`profile/status/${id}`).then(response => response.data)
        },
        updateStatusAPI(status: StatusType) {
            return axiosInstance.put(`profile/status/`, {status: status}).then(response => response.data)
        }
    },
    usersAPI: {
        getUsersAPI(page: number, pageSize: number) {
            return axiosInstance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
        },
        setUnfollowAPI(id: string) {
            return axiosInstance.delete(`follow/${id}`).then(response => response.data)
        },
        setFollowAPI(id: string) {
            return axiosInstance.post(`follow/${id}`).then(response => response.data)
        },
    },
    authAPI: {
        getAuthMeAPI() {
            return axiosInstance.get('auth/me')
        },
        Login(email: string|null, password: string|null, rememberMe: boolean=false) {
            return axiosInstance.post('/auth/login', {email, password, rememberMe}).then(response => response.data)
        },
        Logout() {
            return axiosInstance.delete('/auth/login').then(response => response.data)
        },
    }
}


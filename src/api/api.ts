import axios from "axios";
import {ProfileType, StatusType} from "../components/redux/profileReducer";
import {InputsForFormProfile} from "../components/Profile/ProfileInfo/ProfileInfo";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'de342f74-3acb-43a4-b6f0-3143b51bea1e'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}
export const API = {
    profileAPI: {
        getProfileAPI(id: string) {
            return axiosInstance.get<ProfileType>(`profile/${id}`)
        },
        getStatusAPI(id: string) {
            return axiosInstance.get<string>(`profile/status/${id}`)
        },
        updateStatusAPI(status: StatusType) {
            return axiosInstance.put<ResponseType<{ status: StatusType }>>(`profile/status/`, {status})
        },
        updatePhotoAPI(photo: any) {
            return axiosInstance.put<ResponseType<{ small: string, large: string }>>(`profile/photo/`, photo,
                {
                    headers: {
                        "Content-Type": 'multipart/form-data'
                    }
                }
            )
        },
        updateProfile(data: InputsForFormProfile) {
            return axiosInstance.put<ResponseType<InputsForFormProfile>>('profile', data)
        }
    },
    usersAPI: {
        getUsersAPI(page: number, pageSize: number) {
            return axiosInstance.get(`users?page=${page}&count=${pageSize}`)
        },
        setUnfollowAPI(id: string) {
            return axiosInstance.delete<ResponseType>(`follow/${id}`)
        },
        setFollowAPI(id: string) {
            return axiosInstance.post<ResponseType>(`follow/${id}`)
        },
    },
    authAPI: {
        getAuthMeAPI() {
            return axiosInstance.get<ResponseType<{ id: string, email: string, login: string }>>('auth/me')
        },
        Login(email: string | null, password: string | null, rememberMe: boolean = false, captcha?:string|null) {
            return axiosInstance.post<ResponseType<{ userId: string }>>('/auth/login', {email, password, rememberMe,captcha})
        },
        Logout() {
            return axiosInstance.delete<ResponseType>('/auth/login')
        },
    },
    securityAPI: {
        getCaptchaUrl() {
            return axiosInstance.get('security/get-captcha-url')
        },
    }
}




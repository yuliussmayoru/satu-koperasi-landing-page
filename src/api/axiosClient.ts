import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_API_URL

const axiosClient: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,
})

axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        console.log(`Making request to: ${config.baseURL}`)
        return config
    },
    (error) => {
        console.log('request Error', error)
        return Promise.reject(error)
    }
)

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data
    },
    (error) => {
        if(error.response) {
            const { status } = error.response
            if (status === 404) {
                console.log("Resource Not Found!")
            } else if (status >= 500) {
                console.error("Server Error: ", error.message);
            }
            return Promise.reject(error)
        }
    }
)

export default axiosClient;  // Export the axios instance
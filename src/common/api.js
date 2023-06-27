import axios from 'axios'

export const SITE_URL = import.meta.env.VITE_API_URL
export const GHIBILI_URL = import.meta.env.VITE_GHIBILI_URL

export const BASE_URL = `${SITE_URL}/api`
export const UPLOADS_URL = `${SITE_URL}/uploads`
export const POSTAL_CODE_URL = 'https://yubinbango.github.io/yubinbango-data/data'

/* BACKEND API URLS */
export const API_ADMIN_AUTH = `${BASE_URL}/auth`
export const API_ADMIN_LOGIN = `${BASE_URL}/login`
export const API_ADMIN_MOVIES = `${GHIBILI_URL}/films`
export const API_ADMIN_ACTORS = `${GHIBILI_URL}/people`

/* QUERY KEY */
export const QUERY_KEY_ADMIN_AUTH = 'ADMIN_AUTH'
export const QUERY_KEY_MOVIES = 'MOVIES'
export const QUERY_KEY_MOVIE_DETAILS = 'MOVIE_DETAILS'
export const QUERY_KEY_PEOPLE = 'MOVIE_PEOPLE'
/* SOCKET LABEL */
export const SOCKET_MOVIES = 'moviesList'
export const SOCKET_MOVIES_DETAILS = 'movieDetails'
/* SOCKET PATH */
export const SOCKET_PATH = '/socket.io'

/* AXIOS CONFIG */
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  timeout: 10000,
})

/* BACKEND API REQUESTS */
export async function ADMIN_LOGIN(data) {
  return await axiosInstance.post(API_ADMIN_LOGIN, data)
}

export async function ADMIN_GET_AUTH() {
  return await axiosInstance.get(API_ADMIN_AUTH)
}

export async function ADMIN_GET_MOVIES() {
  const headerData = {
    headers: {
      'content-type': 'application/json',
    },
  }
  return await axiosInstance.get(API_ADMIN_MOVIES, headerData)
}
export async function ADMIN_GET_MOVIE_DETAILS(id) {
  const headerData = {
    headers: {
      'content-type': 'application/json',
    },
  }
  return await axiosInstance.get(API_ADMIN_MOVIES + '/' + id, headerData)
}

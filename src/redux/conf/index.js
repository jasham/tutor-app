import axios from 'axios'

export const baseUrl = `https://reqres.in/api/`

export default () => {
    return axios.create({
      baseURL: baseUrl
    })
}